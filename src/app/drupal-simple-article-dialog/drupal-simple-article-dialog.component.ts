import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrupalSimpleArticle } from '../drupal-simple-article';

@Component({
  selector: 'app-drupal-simple-article-dialog',
  templateUrl: './drupal-simple-article-dialog.component.html',
  styleUrls: ['./drupal-simple-article-dialog.component.sass']
})
export class DrupalSimpleArticleDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DrupalSimpleArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public article: DrupalSimpleArticle
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
