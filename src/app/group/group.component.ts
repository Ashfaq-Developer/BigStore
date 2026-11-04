import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  public loaded: boolean = false;

  public categories: any[] = [];
  // public image: SafeUrl = "";

  constructor(
    private service: PostService,
    private activeRoute: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    /* let groupId = this.activeRoute.snapshot.params;
    console.log(groupId);

    this.activeRoute.params.subscribe(params => {
      let groupId = params['id'];
      console.log(groupId);
      if (params['id'] != null || params['id'] != undefined) {
      this.fetchGroup(groupId);
      }
    }); */

    this.activeRoute.queryParams.subscribe(params => {
      let groupId = params['groupId'];
      console.log(groupId);

      if (groupId != null || groupId != undefined) {
        this.fetchGroup(groupId);
      }
    });

  }

  public params = {
    pageSize: 1000,
    pageNumber: 1
  };

  public fetchGroup(groupId: any) {
    this.service.getGroup(groupId).subscribe(
      (response: any) => {
        console.log(response);
        // this.group = response.data[0];
        this.categories = response.data;
        this.loaded = true;
        // this.image = 'data:image/jpeg;base64,' + this.group.productImages[0].image;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
