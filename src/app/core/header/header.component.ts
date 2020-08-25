import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  myControl = new FormControl();
  options: string[] = ['Indore', 'Mumbai', 'Pune', 'Bangalore'];
  showSearchPane: boolean;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.showSearchPane = false;
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  doSearch(): void {

  }

  searchItems(styleDisplay: string): void{
    if (styleDisplay === 'none'){
      this.showSearchPane = !this.showSearchPane;
    }else{
      this.doSearch();
    }
  }

}
