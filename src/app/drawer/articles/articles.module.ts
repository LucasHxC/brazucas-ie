import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticlesPageRoutingModule } from './articles-routing.module';
import { ArticlesPage } from './articles.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ArticlesPageRoutingModule
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
