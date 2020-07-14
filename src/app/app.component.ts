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

  ngOnInit(): void { }
}
