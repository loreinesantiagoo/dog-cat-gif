import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result } from './model';
import { Observable } from 'rxjs';

export interface SearchResult {
  searchTerm: string;
  images: string[];
  timestamp: number;
  fromCache?: boolean;
}

@Injectable()
export class GiphyService {

  readonly URL = ' /search';
  constructor(private http: HttpClient ) { }

  search(searchTerm: string, resultCount: number): Promise<Result> {

    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('resultCount', resultCount + '');

    return (
      this.http.get<Result>(this.URL, { params: params })
          .toPromise()
    );
  }

  searchWithObservable(searchTerm: string, resultCount: number):
      Observable<Result> {

    const params = new HttpParams()
      .set('searchTerm', searchTerm)
      .set('resultCount', resultCount + '');

    return (
      this.http.get<Result>(this.URL, { params: params })
    );
  }
}
