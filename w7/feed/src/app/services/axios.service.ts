import { Injectable } from '@angular/core';
import axios from 'axios';
import { Post } from 'src/app/interfaces/post.interface';
import { Comment } from 'src/app/interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  urlpost: string = "https://jsonplaceholder.typicode.com/posts";
  urlcomment: string = "https://jsonplaceholder.typicode.com/comments";

  constructor() { }

  async getPosts(): Promise<Post[]>{
    return axios.get(this.urlpost).then( res =>{
      return res.data;
    }).catch(console.error);
  }

  async getComments(): Promise<Comment[]>{
    return axios.get(this.urlcomment).then( res =>{
      return res.data;
    }).catch(console.error);
  }
}
