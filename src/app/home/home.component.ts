import { Component } from '@angular/core';
import { natureBlog } from '../Data/source_file';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts = natureBlog.posts;
  uniqueSeasons: any[] = [];
  selectedPost: any;

    constructor(private router: Router, private shared: SharedService) {
        this.extractUniqueSeasons();
    }

    // Extract unique seasons dynamically
    extractUniqueSeasons() {
        this.uniqueSeasons = [...new Set(this.posts.map(post => post.postType))];
    }

    // Filter posts based on season
    getPostsBySeason(season: string) {
      const searchTerm = this.shared.getPost() || ''; // Ensure it's never undefined or null
      const searchString = typeof searchTerm === 'string' ? searchTerm.toLowerCase() : '';

      return this.posts.filter(post => 
          post.postType === season && 
          post.heading.toLowerCase().includes(searchString)
      );
    }

    opendetailpage(post: any) {
      this.shared.setPost(post);
      this.router.navigate(['/post']);
    }

}
