import { User, UserService } from './../../@core/data/users.service';
import { PostsService, Post } from './../../@core/data/posts.service';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DetailComponent } from './../detail/detail.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  providers: [NgbDropdownConfig]
})
export class PlacesComponent implements OnInit {
  private posts: Array<Post>;
  private copyPosts: Array<Post>;
  private hover: Array<Boolean>;
  private postSelected: Post;
  private authors: Array<User> = new Array<User>();
  private authorSelected: User;
  private status: Array<Boolean> = new Array<Boolean>(3);
  private searchTextInput = '';
  private searching = false;
  private searchFailed = false;

  ngOnInit(): void {
    this.postsService.get().subscribe((posts) => {
      this.posts = posts;
      this.copyPosts = posts;
      this.postSelected = this.posts[0];

      this.hover = new Array<Boolean>(this.posts.length);
      this.hover.fill(false);

      this.posts.forEach(post => {
        this.userService.getUser(post.userId).subscribe((user) => {
          this.authors.push(user);
          this.authorSelected = this.authors[0];
        });
      });
    });
  }

  constructor(private dialogService: NbDialogService,
    private postsService: PostsService,
    private userService: UserService,
    private config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = false;
  }

  openDetailDialog(post) {
    this.dialogService.open(DetailComponent, {
      context: {
        post: post,
      },
    });
  }

  viewDetail(post) {
    this.openDetailDialog(post);
  }

  setStyleStatus(url, status, hover) {
    const styleStatus = {
      green: {
        nonhover: {
          'background-image': `url(${url})`,
          'box-shadow': '0px 2px 6px #2b9660',
        },
        hover: {
          'background-image': `url(${url})`,
          'box-shadow': '-1px 14px 51px 1px rgba(26, 71, 54, 0.75)'
        }
      },
      yellow: {
        nonhover: {
          'background-image': `url(${url})`,
          'box-shadow': '0px 2px 6px #deb624',
        },
        hover: {
          'background-image': `url(${url})`,
          'box-shadow': '-1px 14px 51px 1px rgba(79, 83, 33, 0.75)'
        }
      },
      red: {
        nonhover: {
          'background-image': `url(${url})`,
          'box-shadow': '0px 2px 6px #691313',
        },
        hover: {
          'background-image': `url(${url})`,
          'box-shadow': '-1px 14px 51px 1px rgba(46, 13, 13, 0.75)'
        }
      }
    }

    if (hover) {
      if (status == '0')
        return styleStatus.green.hover;

      if (status == '1')
        return styleStatus.yellow.hover;

      return styleStatus.red.hover;
    }

    if (status == '0')
      return styleStatus.green.nonhover;

    if (status == '1')
      return styleStatus.yellow.nonhover;

    return styleStatus.red.nonhover;
  }

  describe() {
    if (this.postSelected) {
      if (this.postSelected.describe.length > 220) {
        return this.postSelected.describe.substring(0, 220) + '...';
      }

      return this.postSelected.describe;
    }
  }

  private count = 0;
  setStatus(typeIndex) {
    this.count++;

    if (this.count == 2) {
      if (this.status[typeIndex]) {
        this.status[typeIndex] = false;
      } else {
        this.status[typeIndex] = true;
      }

      this.searchAndFillter(this.searchTextInput);

      this.count = 0;
    }
  }

  onSearched(name: string) {
    this.searchTextInput = name;
    this.searchAndFillter(this.searchTextInput);
  }

  searchAndFillter(name) {
    this.posts = this.copyPosts.filter((post) => {
      if (post.name.includes(name)) {
        if (!this.status[0] && !this.status[1] && !this.status[2]) {
          return true;
        }

        for (let i = 0; i < this.status.length; i++) {
          if (this.status[i] && (post.status == (i + ''))) {
            return true;
          }
        }
      }

      return false;
    });
  }
}
