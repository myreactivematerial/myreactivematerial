import { Component, OnInit } from '@angular/core';

import { DrupalBetterArticleService } from '../drupal-better-article.service';

@Component({
  selector: 'app-drupal-better-article',
  templateUrl: './drupal-better-article.component.html',
  styleUrls: ['./drupal-better-article.component.sass']
})
export class DrupalBetterArticleComponent implements OnInit {

  constructor(
    private service: DrupalBetterArticleService,
  ) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe((response) => {
      console.log(response);
    });
  }

}
