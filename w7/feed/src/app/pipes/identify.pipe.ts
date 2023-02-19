import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment.interface';

@Pipe({
  name: 'identify'
})
export class IdentifyPipe implements PipeTransform {

  transform(comments: Comment[], postId: Number): Comment[] {
    return comments.filter(item => item.postId == postId);
  }

}
