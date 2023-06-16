import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: 'article-item.component.html',
  styleUrls: ['article-item.component.scss'],
})
export class ArticleItemComponent {
  @Input() article: any;
}
