import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailsPage } from './article-details.page';

describe('ArticleDetailsPage', () => {
  let component: ArticleDetailsPage;
  let fixture: ComponentFixture<ArticleDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticleDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
