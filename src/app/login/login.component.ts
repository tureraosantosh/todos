import { Component, OnInit } from "@angular/core";
import { Routes, Router } from "@angular/router";
import { HardCodedAuthService } from "../service/hard-coded-auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  valid = true;
  handleLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(["welcome", this.username]);
    } else {
      this.valid = false;
    }
  }
  constructor(
    private router: Router,
    private authService: HardCodedAuthService
  ) {}

  ngOnInit() {}
}
