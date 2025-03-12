import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { natureBlog } from '../../Data/source_file';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  Data = natureBlog;
  uniquePostTypes: any;

  constructor(private share: SharedService){}
  
  ngOnInit(): void {
    this.uniquePostTypes = [...new Set(this.Data.posts.map(post => post.postType))];
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  search(event: any){
    this.share.setPost((event.target as HTMLInputElement).value.trim().toLowerCase());
    
  }
}
