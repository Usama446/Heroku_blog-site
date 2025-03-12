import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.scss'
})
export class PostdetailComponent implements OnInit {
  post: any;
  constructor(private shared: SharedService, private location: Location){}

  ngOnInit() {
    this.post = this.shared.getPost();
  }

  goBack(){
    this.location.back();
  }
}
