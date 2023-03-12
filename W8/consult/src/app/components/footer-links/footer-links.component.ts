import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css']
})
export class FooterLinksComponent {
  links: Array<{name: string; list: string []}> = [
    {name: "Product", list: [ "Overview", "Features", "Tutorials",
                              "Pricing", "Releases" ] },
    {name: "Company", list: [ "About", "Press", "Careers",
                              "Contact", "Partners" ] },
    {name: "Support", list: [ "Help Center", "Terms of service", "Legal",
                              "Privacy Policy", "Status" ] }
                              
  ];
}
