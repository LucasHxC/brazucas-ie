import { Injectable } from '@angular/core';
import { createClient, EntryCollection } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: 'process.env.qides0gx8slq',
    accessToken: 'process.env.s4Cn7AlE7K_24YmQcf_iBFeCKy8PfVL2seH-ZymFA-I'
  });

  getArticles(): Promise<EntryCollection<any>> {
    return this.client.getEntries({ content_type: 'article' });
  }

  getEvents(): Promise<EntryCollection<any>> {
    return this.client.getEntries({ content_type: 'event' });
  }
  
}
