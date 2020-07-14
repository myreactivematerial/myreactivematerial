import { Component, OnInit } from '@angular/core';

import { GetAbeJsonService } from './get-abe-json.service';
import { Post } from './post';
import { PostsResponse } from './posts-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ReactiveMaterial';

  constructor(
    private abeService: GetAbeJsonService
  ) { }

  ngOnInit(): void {
    this.abeService.getAbe().subscribe((response) => {
      console.log({ response });
    });
    this.abeService.getPosts().subscribe((response: PostsResponse) => {
      console.log({ response });
      const posts: Array<Post> = response.posts;
      posts.forEach(x => {
        console.log(x.author);
        console.log(x.title);
        console.log(x.body);
      });
    });
  }
}
