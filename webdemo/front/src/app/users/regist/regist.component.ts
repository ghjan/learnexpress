import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {AuthTokenService} from '../../authtoken.service';
import {JumbotronServive} from '../../jumbotron.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  @ViewChild('pass') pass: ElementRef;
  registForm: FormGroup;
  user: User = new User(0, '', '', '');

  constructor(
    private router: Router,
    private jumService: JumbotronServive,
    private fb: FormBuilder,
    private userSer: UserService,
    private tokenServ: AuthTokenService) {
  }

  ngOnInit() {

    this.registForm = this.fb.group({
      'name': [this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-z]|[A-Z]|[0-9]$/)]],
      'password': [this.user.password,
        [Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^[A-Z][a-zA-Z0-9_-]+$/)]],
      'email': [this.user.email,
        Validators.pattern(/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/)],
      'repassword': [this.user.password, [
        Validators.required]]
    });
  }

  get name() {
    return this.registForm.get('name');
  }

  get password() {
    return this.registForm.get('password');
  }

  get email() {
    return this.registForm.get('email');
  }

  get repassword() {
    return this.registForm.get('repassword');
  }

  checkValid() {
    this.repassword.setValidators([Validators.required, passwordEquals(this.pass.nativeElement.value)]);
  }

  prepareSaveUser(): User {
    const formModel = this.registForm.value;
    const saveUser: User = {
      id: this.user.id,
      name: formModel.name as string,
      password: formModel.password as string,
      email: formModel.email
    };
    return saveUser;
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    this.userSer.saveUser(this.user).subscribe(
      (value) => {
        this.tokenServ.setToken(value['token']);
        this.router.navigate(['/birthday']);
        alert('注册成功！');
      },
      (err) =>
        alert(this.userSer.handleError(err)),
      () => {
        console.log('The post observable is now completed.');
      }
    );
  }
}

export function passwordEquals(password: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isEquals = (password === control.value);
    return isEquals ? null : {'comparePassword': control.value};
  };
}
