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
      // 如果在客户端这边出了错误（比如在RxJS操作符中抛出的异常或某些阻碍完成这个请求的网络错误），就会抛出一个Error类型的异常
      return '发生错误，错误信息:' + err.error.message;
    } else {
      // 后端返回了一个失败的返回码（如404、500等）
      console.log(`Backend returned code ${err.status}, body was: ${err.error['msg']}`);
      return err.error['msg'];
    }
  }
}
