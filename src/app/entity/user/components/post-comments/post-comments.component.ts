import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  comments: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private commentsService: CommentsService) {
    this.activatedRoute.params.subscribe((params) => {
      this.commentsService.getCommentByID(params.id).subscribe( comments => this.comments = comments);
    });
  }

  ngOnInit(): void {
  }

}
