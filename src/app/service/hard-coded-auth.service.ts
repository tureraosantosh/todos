import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardCodedAuthService {
  isLogin() {
    let user = sessionStorage.getItem("user");
    return !(user === null);
  }
  authenticate(username, password) {
    if (username === "vaibhav" && password === "vaibhav") {
      sessionStorage.setItem("user", username);
      return true;
    }

    return false;
  }

  logout() {
    sessionStorage.removeItem("user");
  }
  constructor() {}
}
