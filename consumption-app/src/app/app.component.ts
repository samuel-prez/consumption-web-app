import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from "./login/login.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { UserComponent } from "./user/user.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, UserComponent, MainMenuComponent, ButtonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'consumption-app';
}