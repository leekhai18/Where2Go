import { PostsService, Post } from './../../../@core/data/posts.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, of } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap, tap, catchError
} from 'rxjs/operators';

@Component({
  selector: 'ngx-posts-search',
  templateUrl: './posts-search.component.html',
  styleUrls: ['./posts-search.component.scss'],
  providers: [NgbDropdownConfig]
})
export class PostsSearchComponent implements OnInit {
  @Output() searched = new EventEmitter<String>();

  private inputmodel = '';
  private searching = false;
  private searchFailed = false;
  private posts$: Observable<Post[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: PostsService,
    config: NgbDropdownConfig) {
    config.autoClose = true;
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);

    if (term == '') {
      this.searched.emit('');
    }
  }

  ngOnInit(): void {
    this.posts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      tap(() => this.searching = true),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchPosts(term).pipe(
        tap(() => this.searchFailed = false),
        catchError(() => {
          this.searchFailed = true;
          return of([]);
        })
      )),

      tap(() => this.searching = false)
    );
  }

  select(name) {
    this.inputmodel = name;
    this.searched.emit(name);
  }

  onEnter() {
    document.getElementById('firstSuggestion').click();
    document.getElementById('search-box').blur();
  }
}
