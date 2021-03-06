import { Component, OnInit } from "@angular/core";
import { RoomService } from "../services/room.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.page.html",
  styleUrls: ["./rooms.page.scss"]
})
export class RoomsPage implements OnInit {
  roomsArray;
  newRoomName = "";
  constructor(private rs: RoomService) {}

  ngOnInit() {
    this.rs.getAllRooms().subscribe((response: any) => {
      console.log(response);
      this.roomsArray = response.data;
    });
  }

  handleClick() {
    this.rs.addRoom("uno reverz").subscribe((response: any) => {
      console.log(response);
      this.newRoomName = "";
      this.roomsArray = response.data;
    });
  }
}
