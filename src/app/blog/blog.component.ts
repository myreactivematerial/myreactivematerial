import { Component, OnInit } from '@angular/core';
import { GetAbeJsonService } from '../get-abe-json.service';
import { PostsResponse } from '../posts-response';
import { Post } from '../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  posts: Array<Post> = [];

  constructor(
    private abeService: GetAbeJsonService
  ) { }

  ngOnInit(): void {
    this.abeService.getPosts().subscribe((response: PostsResponse) => {
      this.posts = response.posts;
    });
  }

}
