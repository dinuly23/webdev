import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';
import { Post } from 'src/app/interfaces/post.interface';
import { Comment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  comments: Comment[] = [];
  index: number = 1;
  constructor( private services: AxiosService) {}

  ngOnInit(): void {
    Promise.all([this.services.getPosts(), this.services.getComments()]).then((data) => {
      [this.posts, this.comments] = data;
    }).catch(console.error);
  }
}
