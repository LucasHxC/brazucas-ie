import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: 'article-details.page.html',
  styleUrls: ['article-details.page.scss'],
})
export class ArticleDetailsPage {
  article: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ionViewWillEnter() {
    const articleId = parseInt(this.activatedRoute.snapshot.paramMap.get('articleId'));
    // Fetch article details using the articleId from your data source
    this.article = {
      id: articleId,
      title: 'Travel Tips for Ireland',
      date: new Date('2023-06-01'),
      imageUrl: 'assets/img/travel-tips.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat eu lectus fermentum dignissim. Nullam auctor mi et accumsan feugiat...',
    };
  }
}
