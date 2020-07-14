import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {

  @Input() post: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
