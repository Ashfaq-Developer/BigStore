import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public loaded: boolean = false;

  public product: any;
  public image: SafeUrl = "";

  constructor(
    private service: PostService,
    private activeRoute: ActivatedRoute
  ) {
  }

  public ngOnInit() {

    let params = this.activeRoute.snapshot.params

    if (params['id'] != null || params['id'] != undefined) {
      this.getProduct(params['id']);
    }

  }

  private getProduct(productId: any) {
    this.service.getProduct(productId!).subscribe(
      (response: any) => {
        console.log(response);
        this.product = response.data[0];
        this.loaded = true;
        this.image = 'data:image/jpeg;base64,' + this.product.productImages[0].image;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}