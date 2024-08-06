import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
