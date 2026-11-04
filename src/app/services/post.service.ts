import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private baseUrl = 'https://bo.marelion.com/api/open';
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) {}

  // getPosts() {
  //   return this.httpClient.get(this.baseUrl + '/groups/list');
  // }

  // getGroup(groupId:any){
  //   return this.httpClient.get(this.baseUrl + '/categories/list?pageSize=1000&pageNumber=1&groupId=' + groupId);
  // }

  // getProducts(payload: any) {
  //   const params = new HttpParams({fromObject: payload});
  //   return this.httpClient.get(this.baseUrl + '/products/list?' + params);
  // }

  // getProduct(id: string) {
  //   return this.httpClient.get(`${this.baseUrl}/product/${id}/view`);
  // }

  // Get all products (used by GroupsComponent)
  getPosts() {
    return this.httpClient.get(`${this.baseUrl}/products`);
  }

  // Get products by category (used by GroupComponent)
  getGroup(groupId: any) {
    return this.httpClient.get(
      `${this.baseUrl}/products/category/${encodeURIComponent(groupId)}`
    );
  }

  // Get all products (used by ProductsComponent)
  getProducts(payload: any) {
    return this.httpClient.get(`${this.baseUrl}/products`);
  }

  // Get single product
  getProduct(id: string) {
    return this.httpClient.get(`${this.baseUrl}/products/${id}`);
  }

  // Get all categories
  getCategories() {
    return this.httpClient.get(`${this.baseUrl}/products/categories`);
  }
}
