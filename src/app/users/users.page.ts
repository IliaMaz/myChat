import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"]
})
export class UsersPage implements OnInit {
  usersArray = [];
  newUser = "";
  constructor(private us: UserService) {}

  ngOnInit() {
    this.us.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.usersArray = response.data;
    });
  }
  // handleClick() {
  //   this.us.signUp("uno reverz").subscribe((response: any) => {
  //     console.log(response);
  //     this.newUser = "";
  //     this.usersArray = response.data;
  //   });
  // }
}
