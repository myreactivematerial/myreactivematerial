import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReloadArticleComponent } from './reload-article.component';

describe('ReloadArticleComponent', () => {
  let component: ReloadArticleComponent;
  let fixture: ComponentFixture<ReloadArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadArticleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh when we click refresh', () => {
    expect(component.onClickRefresh()).not.toBeDefined();
  });
});
