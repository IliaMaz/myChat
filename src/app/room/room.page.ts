import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../services/messages.service";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-room",
  templateUrl: "./room.page.html",
  styleUrls: ["./room.page.scss"]
})
export class RoomPage implements OnInit {
  messageArray = [];
  message = "";
  constructor(
    private ms: MessagesService,
    private route: ActivatedRoute,
    private us: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const capturedId = params.get("roomId");
      this.ms.getRoomMessages(capturedId).subscribe((response: any) => {
        this.messageArray = response.data;
        console.log(response.data);
      });
    });
  }
  handleClick(message) {
    this.route.paramMap.subscribe(params => {
      const capturedId = params.get("roomId");
      this.ms.addRoomMessages(capturedId, message);
    });
  }
}
