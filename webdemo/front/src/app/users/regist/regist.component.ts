import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {AuthTokenService} from '../../authtoken.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  @ViewChild('pass') pass: ElementRef;
  registForm: FormGroup;
  user: User = new User(0, '', '', '');

  constructor(private fb: FormBuilder,
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
}

export function passwordEquals(password: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isEquals = (password === control.value);
    return isEquals ? null : {'comparePassword': control.value};
  };
}
