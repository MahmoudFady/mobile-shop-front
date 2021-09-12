import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentI } from 'src/app/shared/models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentsService {
  private readonly baseUrl = 'http://localhost:3000/comment/';
  private comments: CommentI[] = [];
  private updatedComments = new Subject<CommentI[]>();
  constructor(private http: HttpClient) {}
  getProductCommentsById(id: string) {}
  initialComments(comments: CommentI[]) {
    this.comments = comments;
    this.updatedComments.next(this.comments);
  }
  addComment(productId: string, content: string) {
    return this.http.post<{ newComment: CommentI; message: string }>(
      this.baseUrl + productId,
      {
        content,
      }
    );
  }

  getUpdateComments() {
    return this.updatedComments.asObservable();
  }
}
