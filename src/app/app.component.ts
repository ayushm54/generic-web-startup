import { Component, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  items: SampleItem[];

  ngOnInit(): void{
    this.items = ITEMS;
  }
}

export interface SampleItem {
  title: string;
  image: string;
  description: string;
}

const ITEMS: SampleItem[] = [
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  },
  {
    title: 'Sample Title',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`
  }
];
