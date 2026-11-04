import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('header') headerComponent: HeaderComponent;
  @ViewChild('background') bgElement: ElementRef;

  public type: string = 'all';

  public filter: any[] = [];

  ngOnInit() {
    this.filter = this.itemContent;
    // console.log(this.itemContent[1].type);    
  }

  ngAfterViewInit() {
    // console.log(this.headerComponent.variable);
    console.log(this.bgElement.nativeElement);
  }


  public list: any[] = [
    {
      id: 1,
      title: "ALL GAMES",
      link: '/',
      type: 'all'
    },
    {
      id: 2,
      title: "STEAM",
      link: '/',
      type: 'steam'
    },
    {
      id: 3,
      title: "MOBILE",
      link: '/',
      type: 'mobile'
    },
    {
      id: 4,
      title: "WINDOWS",
      link: '/',
      type: "windows"
    },
    {
      id: 5,
      title: "PS",
      link: '/',
      type: "ps"
    },
    {
      id: 6,
      title: "XBOX",
      link: '/',
      type: "xbox"
    }
  ];

  public itemContent: any[] = [
    {
      id: 1,
      title: "World Of Tanks",
      imgUrl: 'assets/holiday-ops/main-page/card-4.png',
      link: '/',
      type: ['all', 'steam', 'windows']
    },
    {
      id: 2,
      title: "Blitz",
      imgUrl: 'assets/holiday-ops/main-page/card-5.png',
      link: '/',
      type: ['all', 'steam', 'mobile', 'windows']
    },
    {
      id: 3,
      title: "Modern Armor",
      imgUrl: 'assets/holiday-ops/main-page/card-6.png',
      link: '/',
      type: ['all', 'ps', 'xbox']
    }
  ]


  public selectTab(type: any) {
    this.filter = this.itemContent.filter(tab => tab.type.includes(type));
    // console.log(type);
    // this.filter = this.itemContent.filter(tab => tab.type);
    // console.log(this.filter);    
    // console.log(this.filter.includes(type));
    // this.filter = this.itemContent.filter(tab => tab.type.includes(type));
    // console.log(this.filter);

    // if (! event.target.classList.contains('active')) {
    //   event.target.classList.add('active');
    // }else{
    //   event.target.classList.remove('active');
    // }
    this.type = type;
  }






}
