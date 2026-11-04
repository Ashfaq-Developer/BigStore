import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public variable: any = "hurry";
  public writeText(text: string) {
    console.log(text);
  }

  public makeAlert() {
    alert();
  }
}
