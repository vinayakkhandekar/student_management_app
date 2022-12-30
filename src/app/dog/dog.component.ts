import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private api:ApiService) { }
data
data2;
  ngOnInit() {
   
  }
  show()
  {
    this.api.getdog().subscribe(res => this.data=res);
  this.data.forEach(element => {
       this.data2=element;
     });
  }

}
