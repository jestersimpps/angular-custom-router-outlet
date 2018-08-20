import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Extending the angular router-outlet</h1>
    <ul>
      <li>
        <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      </li>
      <li>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
