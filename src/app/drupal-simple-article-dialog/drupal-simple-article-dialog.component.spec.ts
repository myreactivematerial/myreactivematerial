import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleDialogComponent } from './drupal-simple-article-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DrupalSimpleArticleDialogComponent', () => {
  let component: DrupalSimpleArticleDialogComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrupalSimpleArticleDialogComponent,],
      imports: [MatDialogModule],
      providers:
        [
          {
            provide: MatDialogRef,
            useValue: {}
          },
          {
            provide: MAT_DIALOG_DATA, useValue: {}
          }
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalSimpleArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
