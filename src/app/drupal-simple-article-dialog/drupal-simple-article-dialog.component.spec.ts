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
            provide: MAT_DIALOG_DATA, useValue: {
              "type": "node--simplearticle",
              "id": "b1789a3d-629e-4e2e-a0d7-e15001962c6a",
              "links": {
                  "self": {
                      "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a?resourceVersion=id%3A8"
                  }
              },
              "attributes": {
                  "drupal_internal__nid": 4,
                  "drupal_internal__vid": 8,
                  "langcode": "en",
                  "revision_timestamp": "2020-07-15T18:20:34+00:00",
                  "revision_log": "change hello world",
                  "status": true,
                  "title": "Welcome to Reactive Material!",
                  "created": "2020-07-15T16:31:36+00:00",
                  "changed": "2020-07-15T18:20:34+00:00",
                  "promote": true,
                  "sticky": false,
                  "default_langcode": true,
                  "revision_translation_affected": true,
                  "moderation_state": "published",
                  "path": {
                      "alias": null,
                      "pid": null,
                      "langcode": "en"
                  },
                  "field_simple_article_body": [
                      "This blog is a demonstration of using Drupal as a CMS combined with Angular as a front-end. It is easy and straightforward. Drupal takes care of the backend for you and Angular takes care of the frontend. It is beautiful.",
                      "This is the classic idea of separation of concerns. When I write on this blog, I write in plain text. While my structure is very simple for the purposes of this demo, you could easily adapt the structure to fit your needs. When you are writing out your thoughts, you should be able to focus on the content and not have to worry about the presentation. With unlimited plain-text fields, each representing a paragraph, you can focus on what you want to say and not worry about how the words will look on a page (that can come later). ",
                      "That\u0027s not to say you can\u0027t do complex things. You could easily put rich text. However, I like the simplicity of plain text, at least for brainstorming sessions. "
                  ]
              },
              "relationships": {
                  "node_type": {
                      "data": {
                          "type": "node_type--node_type",
                          "id": "f39e999c-8219-49b4-83a6-5587408d3ec8"
                      },
                      "links": {
                          "related": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/node_type?resourceVersion=id%3A8"
                          },
                          "self": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/relationships\/node_type?resourceVersion=id%3A8"
                          }
                      }
                  },
                  "revision_uid": {
                      "data": {
                          "type": "user--user",
                          "id": "a0817276-5dc2-4bc3-b68f-d821f3cd98d2"
                      },
                      "links": {
                          "related": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/revision_uid?resourceVersion=id%3A8"
                          },
                          "self": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/relationships\/revision_uid?resourceVersion=id%3A8"
                          }
                      }
                  },
                  "uid": {
                      "data": {
                          "type": "user--user",
                          "id": "a0817276-5dc2-4bc3-b68f-d821f3cd98d2"
                      },
                      "links": {
                          "related": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/uid?resourceVersion=id%3A8"
                          },
                          "self": {
                              "href": "https:\/\/live-europeanunion.pantheonsite.io\/jsonapi\/node\/simplearticle\/b1789a3d-629e-4e2e-a0d7-e15001962c6a\/relationships\/uid?resourceVersion=id%3A8"
                          }
                      }
                  }
              }
          }
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
