import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = "https://ajax-course.herokuapp.com";
  userHash = "";
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.baseUrl + "/users");
  }
  signUp(username, password, picture) {
    const data = {
      username: username,
      password: password,
      image: picture
    };
    return this.http.post(this.baseUrl + "/users", data);
  }
  logIn(username, password) {
    const data = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + "/users", data);
  }
}
