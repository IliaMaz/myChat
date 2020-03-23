import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "rooms",
    pathMatch: "full"
  },

  {
    path: "rooms",
    loadChildren: () =>
      import("./rooms/rooms.module").then(m => m.RoomsPageModule)
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then(m => m.UsersPageModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "room/:roomId",
    loadChildren: () => import("./room/room.module").then(m => m.RoomPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
