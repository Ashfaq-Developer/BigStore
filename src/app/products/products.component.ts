import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import * as moment from 'moment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

//   public posts: any[] = [];

//   public filteredPosts: any[] = [];

//   public loading: boolean = false;

//   public selectedSortOption: any;

//   public moment: any = moment;

//   public data: any;

//   public pageNumbers: number[] = [];

//   public currentPage = 1;

//   public pageSize: number = 10;

//   public totalPages: number;

//   public visiblePageCount: number = 3;

//   public visiblePageNumbers: number[] = [];

//   constructor(private service: PostService) { }

//   public ngOnInit() {
//     this.loadPosts();
//   }

//   public params = {
//     pageNumber: 1,
//     pageSize: 20
//   };

//   public loadPosts() {
//     this.filteredPosts = [];
//     this.loading = true;
//     this.service.getProducts(this.params).subscribe(
//       (response: any) => {
//         this.data = response;
//         this.posts = response.data;
//         this.loading = false;
//         this.filteredPosts = response.data;
//         this.totalPages = response.pages;
//         console.log(this.totalPages);
//         this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
//         console.log(response);

//         const startPage = Math.max(1, this.currentPage - Math.floor(this.visiblePageCount / 2));
//         const endPage = Math.min(this.totalPages, startPage + this.visiblePageCount - 1);
//         this.visiblePageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

//       },
//       (error: any) => {
//         console.error('Error fetching data:', error);
//         this.loading = false;
//       }
//     );
//   }


//   public searchByName(event: any) {
//     let searchData = (event.target.value).toLowerCase();
//     console.log(searchData);
//     this.filteredPosts = this.posts.filter(post => post.name.toLowerCase().includes(searchData));

//     console.log(this.filteredPosts);
//   }

//   public changeSortByOption(event: any) {
//     console.log('click');
//     console.log(event.target.value);
//     this.selectedSortOption = event.target.value;
//   }

//   public applyFilter() {
//     console.log('Apply filter');

//     if (this.selectedSortOption == 'ZtoA') {
//       //   this.filteredPosts = this.posts.sort((a, b) => b.name.localeCompare(a.name));
//       this.filteredPosts = this.posts.sort((a: any, b: any) => {
//         if (a.name.toLowerCase() > b.name.toLowerCase()) {
//           return -1;
//         }
//         if (a.name.toLowerCase() < b.name.toLowerCase()) {
//           return 1;
//         }
//         return 0;
//       });
//     } else if (this.selectedSortOption == 'AtoZ') {
//       // this.filteredPosts = this.posts.sort((a, b) => a.name.localeCompare(b.name));
//       this.filteredPosts = this.posts.sort((a: any, b: any) => {
//         if (a.name.toLowerCase() < b.name.toLowerCase()) {
//           return -1;
//         }
//         if (a.name.toLowerCase() > b.name.toLowerCase()) {
//           return 1;
//         }
//         return 0;
//       });
//     } else if (this.selectedSortOption == 'latest') {
//       this.filteredPosts = this.posts.sort((a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
//     } else if (this.selectedSortOption == 'oldest') {
//       this.filteredPosts = this.posts.sort((a: any, b: any) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
//     } else {
//       // Handle other options or default behavior
//       this.filteredPosts = this.posts;
//     }
//   }


//   public cancelFilter() {
//     console.log('Cancel filter');
//     this.filteredPosts = this.posts;
//   }


//   public changePerPageOption(event: any) {
//     console.log('click');
//     console.log(event.target.value);
//   }


//   public nextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.params.pageNumber = this.currentPage;
//       this.loadPosts();
//     }
//   }

//   public previousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.params.pageNumber = this.currentPage;
//       this.loadPosts();
//     }
//   }

//   public goToPage(page: number) {
//     this.currentPage = page;
//     this.params.pageNumber = page;
//     this.loadPosts();
//   }



  public posts: any[] = [];
  public filteredPosts: any[] = [];
  public paginatedPosts: any[] = [];

  public loading = false;
  public selectedSortOption: string = '';

  public moment: any = moment;

  public currentPage = 1;
  public pageSize = 10;
  public totalPages = 1;

  public visiblePageCount = 3;
  public visiblePageNumbers: number[] = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  // Fetch products
  public loadPosts(): void {
    this.loading = true;

    this.service.getProducts({}).subscribe({
      next: (response: any) => {
        this.posts = response;
        this.filteredPosts = [...this.posts];

        this.currentPage = 1;
        this.updatePagination();

        this.loading = false;

        console.log('Products:', response);
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    });
  }

  // Search products by title
  public searchByName(event: any): void {
    const searchData = event.target.value.toLowerCase();

    this.filteredPosts = this.posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchData)
    );

    this.currentPage = 1;
    this.applyFilter();
  }

  // Select sorting option
  public changeSortByOption(event: any): void {
    this.selectedSortOption = event.target.value;
  }

  // Apply sorting
  public applyFilter(): void {
    const sortedPosts = [...this.filteredPosts];

    if (this.selectedSortOption === 'ZtoA') {
      sortedPosts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (this.selectedSortOption === 'AtoZ') {
      sortedPosts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (this.selectedSortOption === 'latest') {
      sortedPosts.sort((a, b) => b.id - a.id);
    } else if (this.selectedSortOption === 'oldest') {
      sortedPosts.sort((a, b) => a.id - b.id);
    }

    this.filteredPosts = sortedPosts;
    this.currentPage = 1;
    this.updatePagination();
  }

  // Cancel sorting
  public cancelFilter(): void {
    this.selectedSortOption = '';
    this.filteredPosts = [...this.posts];
    this.currentPage = 1;
    this.updatePagination();
  }

  // Change products per page
  public changePerPageOption(event: any): void {
    this.pageSize = Number(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }

  // Update pagination data
  public updatePagination(): void {
    this.totalPages = Math.max(
      1,
      Math.ceil(this.filteredPosts.length / this.pageSize)
    );

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.paginatedPosts = this.filteredPosts.slice(
      startIndex,
      endIndex
    );

    this.updateVisiblePageNumbers();
  }

  // Update visible page numbers
  public updateVisiblePageNumbers(): void {
    const startPage = Math.max(
      1,
      this.currentPage - Math.floor(this.visiblePageCount / 2)
    );

    const endPage = Math.min(
      this.totalPages,
      startPage + this.visiblePageCount - 1
    );

    this.visiblePageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  // Next page
  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // Previous page
  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Go to specific page
  public goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
}