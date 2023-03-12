import { Component } from '@angular/core';
import {Why} from 'src/app/interfaces/why.interface';

@Component({
  selector: 'app-why-box',
  templateUrl: './why-box.component.html',
  styleUrls: ['./why-box.component.css']
})
export class WhyBoxComponent {
  path: string = "assets/img/";
  posts: Array<Why> = [
        { icon: "circle_layer.png", title: "Enviromental Law", 
        body: "Environmental legal issues might occur since the planned business activities are designed" },
        { icon: "bag.png", title: "Corporate and Commercial",
        body: "We provide a complete range of services for the continuity of your business activities." },
        { icon: "rocket.png", title: "Information and Technology", 
        body: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty." },
        { icon: "user_arrows.png", title: "Other Services",
        body: "In dealing with disruptive economic and legal challenge, our firm also provide various legal services." }
  ];
}
