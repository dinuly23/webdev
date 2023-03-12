import { Component } from '@angular/core';
import {Client} from 'src/app/interfaces/client.interface';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  path: string = "assets/img/";
  clients: Array<Client> =[
    { name: "Anya Tailor Joy",
      employment: "CEO, SF Industires",
      icon: "client.png",
      title: "Incredible Experience",
      body: "We had an incredible experience working with Landify and were" +
            "impressed they made such a big difference in only three weeks." + 
            "Our team is so grateful for the wonderful improvements they made " + 
            "and their ability to get familiar with the concept so quickly."
    },
    { name: "Sri Alam",
      employment: "CEO, Membagongkan GROUP",
      icon: "client.png",
      title: "Dependable, Responsive, Professional Partner",
      body: "Fermin Apps has collaborated with Landify team for several " + 
            "projects such as Photo Sharing Apps and Custom Social Networking Apps. " +
            "The experience has been pleasant, professional and exceeding our expectations."
    }
  ];
}
