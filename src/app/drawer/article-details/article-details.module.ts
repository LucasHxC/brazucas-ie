import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailsPageRoutingModule } from './article-details-routing.module';
import { ArticleDetailsPage } from './article-details.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ArticleDetailsPageRoutingModule
  ],
  declarations: [ArticleDetailsPage]
})
export class ArticleDetailsPageModule {}
