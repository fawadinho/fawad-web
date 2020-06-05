import { Component } from '@angular/core';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-main-page-posts',
  templateUrl: './main-page-posts.component.html',
  styleUrls: ['./main-page-posts.component.scss']
})
export class MainPagePostsComponent{

  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

}
