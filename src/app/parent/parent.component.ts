import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  @ViewChild ('element') element: ElementRef;
  @ViewChild ('p') p: ElementRef;

  public width: string = '';
  public height: string = '';

  public onClick() {    
    // console.log(this.element.nativeElement.innerText = 'checked'); 
    if (this.element.nativeElement.innerHTML == "uncheck"){
      this.element.nativeElement.innerHTML = "checked";
    } else if (this.element.nativeElement.innerHTML == "checked"){
      this.element.nativeElement.innerHTML = "uncheck";
    }  
    
    this.p.nativeElement.hidden = true;
      // this.p.nativeElement.hidden = !this.p.nativeElement.hidden;
      // this.p.nativeElement.toggle();
  }

  public getImage(){
    this.width 
    this.height
  }

}
