import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private selectedPost: any; 
  
  constructor() { }


  setPost(post: any) {
    this.selectedPost = post;
  }

  getPost() {
    return this.selectedPost;
  }
}
