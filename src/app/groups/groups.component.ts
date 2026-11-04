import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import * as moment from 'moment';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {

  public posts: any[] = [];

  public filteredPosts: any[] = [];

  public loading: boolean = true;

  public selectedSortOption: any;

  public moment: any = moment;

  public data: any;

  constructor(private service: PostService) { }

  public ngOnInit() {
    this.service.getPosts().subscribe(
      (response: any) => {
        this.data = response;
        this.posts = response.data;
        this.loading = false;
        this.filteredPosts = response.data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    );
  }


  public searchByName(event: any) {
    let searchData = (event.target.value).toLowerCase();
    console.log(searchData);
    this.filteredPosts = this.posts.filter(post => post.name.toLowerCase().includes(searchData));

    console.log(this.filteredPosts);
  }

  public changeSortByOption(event: any) {
    console.log('click');
    console.log(event.target.value);
    this.selectedSortOption = event.target.value;
  }

  /* public applyFilter() {
    console.log('Apply filter');
 
    if (this.selectedSortOption === 'ZtoA') {
      this.filteredPosts = this.posts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.selectedSortOption === 'AtoZ') {
      this.filteredPosts = this.posts.sort((a, b) => a.name.localeCompare(b.name));
    }
    // else if (this.selectedSortOption === 'latest') {
    //     this.filteredPosts = this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    // } else if (this.selectedSortOption === 'oldest') {
    //     this.filteredPosts = this.posts.sort((a, b) => new Date(a.date) - new Date(b.date));
    // } 
    else {
      // Handle other options or default behavior
      this.filteredPosts = this.posts;
    }
  } */

  public applyFilter() {
    console.log('Apply filter');

    if (this.selectedSortOption == 'ZtoA') {
      this.filteredPosts = this.posts.sort((a: any, b: any) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    } else if (this.selectedSortOption == 'AtoZ') {
      this.filteredPosts = this.posts.sort((a: any, b: any) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    } else if (this.selectedSortOption == 'latest') {
      this.filteredPosts = this.posts.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else if (this.selectedSortOption == 'oldest') {
      this.filteredPosts = this.posts.sort((a: any, b: any) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
    } else {
      // Handle other options or default behavior
      this.filteredPosts = this.posts;
    }
  }


  public cancelFilter() {
    console.log('Cancel filter');
    // Reset any changes made during the filter
    this.filteredPosts = this.posts;
  }


  public changePerPageOption(event: any) {
    console.log('click');
    console.log(event.target.value);
  }


  

}
