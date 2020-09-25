import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  posts: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPostById(params.id).subscribe(posts => this.posts = posts);
    });
  }

  ngOnInit(): void {
  }

}
