import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Jumbotron, JumbotronServive} from '../../jumbotron.service';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {AuthTokenService} from '../../authtoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User(0, '', '', '');

  constructor(
    private route: Router,
    private jumService: JumbotronServive,
    private userServ: UserService,
    private tokenServ: AuthTokenService) {
    jumService.setJumbotron(new Jumbotron('Login',
      `Please login with your user name and password first`,
      ``));
  }

  onSubmit() {
    this.userServ.getUser(this.user).subscribe(
      (resp) => {
        this.tokenServ.setToken(resp.body['token']);
        this.route.navigate(['/birthday']);
        alert('登录成功！');
      },
      (err) =>
        alert(this.userServ.handleError(err)),
      () => console.log('The Post observable is now completed. ')
    );
  }
}
