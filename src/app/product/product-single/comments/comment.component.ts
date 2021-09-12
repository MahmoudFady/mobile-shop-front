import { AuthService } from './../../../auth/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommentsService } from './comments.service';
import { Component, Input } from '@angular/core';
import { CommentI } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-product-comments',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class ProductCommentsComponent {
  isAuthenticated = false;
  productId = '';
  @Input() comments: CommentI[] | undefined = [];
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.isAuthenticated = this.authService.getToken() ? true : false;
    this.route.params.subscribe((params: Params) => {
      this.productId = params['productId'];
    });
  }

  onAddComment(f: NgForm) {
    const { content } = f.value;
    this.commentService
      .addComment(this.productId, content)
      .subscribe((response) => {
        f.reset();
        this.comments?.push(response.newComment);
      });
  }
}
