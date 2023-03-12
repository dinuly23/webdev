import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-footer-links',
  templateUrl: './sub-footer-links.component.html',
  styleUrls: ['./sub-footer-links.component.css']
})
export class SubFooterLinksComponent {
  path: string = "assets/img/";
  icons: string[] = [
    "instagram", "basketball", "twitter", "you_tube"
  ];
}
