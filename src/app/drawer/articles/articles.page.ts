import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: 'articles.page.html',
  styleUrls: ['articles.page.scss'],
})
export class ArticlesPage {
  articles: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    // Fetch articles from your data source
    this.articles = [
      {
        id: 1,
        title: 'Travel Tips for Ireland',
        date: new Date('2023-06-01'),
        imageUrl: 'assets/img/travel-tips.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat eu lectus fermentum dignissim. Nullam auctor mi et accumsan feugiat...',
      },
      {
        id: 2,
        title: 'Irish Cuisine: A Taste of Ireland',
        date: new Date('2023-05-15'),
        imageUrl: 'assets/img/irish-cuisine.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat eu lectus fermentum dignissim. Nullam auctor mi et accumsan feugiat...',
      },
      // Add more articles here...
    ];
  }

  viewArticleDetails(articleId: number) {
    this.router.navigate(['/article-details', articleId]);
  }
}
