import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts = [
    { title: 'First Post', description: 'This is the first post.' },
    { title: 'Second Post', description: 'This is the second post.' }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
