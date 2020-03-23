import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  username = "";
  password = "";
  image = "";
  constructor(private us: UserService, public toaster: ToastController) {}

  ngOnInit() {}
  handleClick() {
    this.us
      .signUp(this.username, this.password, this.image)
      .subscribe(async (result: any) => {
        console.log(result);
        if (result.status === 1) {
          // its was a success
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
