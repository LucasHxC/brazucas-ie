import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../core/services/contentful.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  articles: any[] = [];

  constructor(private contentfulService: ContentfulService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadArticles();
  }

  private async loadArticles() {
    const articlesCollection = await this.contentfulService.getArticles();
    this.articles = articlesCollection.items;
  }

  openArticle(article: any) {
    this.navCtrl.navigateForward('/article-details', {
      queryParams: { article: JSON.stringify(article) }
    });
  }

}
