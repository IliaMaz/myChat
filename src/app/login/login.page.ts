import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  hash = "";
  constructor(private us: UserService, public toaster: ToastController) {}

  ngOnInit() {}
  handleClick() {
    this.us
      .logIn(this.username, this.password)
      .subscribe(async (result: any) => {
        console.log(result);
        if (result.status == 1) {
          this.hash = result.data.hash;
          this.us.userHash = this.hash;
        } else {
          const toast = await this.toaster.create({
            message: result.data,
            duration: 2000
          });
          toast.present();
        }
      });
  }
}
