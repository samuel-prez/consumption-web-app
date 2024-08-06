import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, UserComponent, MainMenuComponent,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'consumption-app';
}


