import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';

// import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient) {
  }

  // 注册用户
  saveUser(user: User) {
    const savedUser = {
      name: user.name,
      password: user.password,
      email: user.email
    };
    return this.http.post('http://localhost:3000/users/register', savedUser, {
      responseType: 'json'
    });

  }

  // 登录
  getUser(user: User) {
    const loginUser = {
      name: user.name,
      password: user.password
    };
    return this.http.post('http://localhost:3000/users/login', loginUser, {
      observe: 'response'
    });

  }

  // 错误处理
  handleError(err: HttpErrorResponse): string {
    if (err.error instanceof Error) {
      return '发生错误，错误信息:' + err.error.message;
    } else {
      console.log(`Backend returned code ${err.status}, body was: ${err.error['msg']}`);
      return err.error['msg'];
    }
  }
}
