import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  baseUrl = "https://ajax-course.herokuapp.com/messages";
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private us: UserService
  ) {}
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const capturedId = params.get("roomId");
  //     this.getRoomMessages(capturedId).subscribe((response: any) => {
  //       console.log(response);
  //     });
  //   });
  // }
  getRoomMessages(roomId) {
    console.log(this.baseUrl + "/" + roomId);
    return this.http.get(this.baseUrl + "/" + roomId);
  }
  addRoomMessages(roomId, message) {
    const data = {
      message: message,
      hash: this.us.userHash
    };
    return this.http
      .post(this.baseUrl + "/" + roomId, data)
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
