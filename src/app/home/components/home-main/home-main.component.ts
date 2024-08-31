import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent implements OnInit, AfterViewInit, OnDestroy {
  currentParagraph = 0;
  paragraphs: NodeListOf<Element>;
  scrollInterval: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.paragraphs = this.el.nativeElement.querySelectorAll('.welcome-text p');
    this.showParagraph(this.currentParagraph);
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      this.nextParagraph();
    }, 4000); 
  }

  stopAutoScroll() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  nextParagraph() {
    if (this.currentParagraph < this.paragraphs.length - 1) {
      this.showParagraph(++this.currentParagraph);
    } else {
      this.showParagraph(this.currentParagraph = 0);
    }
  }

  showParagraph(index: number) {
    this.paragraphs.forEach((paragraph, i) => {
      if (i === index) {
        paragraph.classList.add('active');
      } else {
        paragraph.classList.remove('active');
      }
    });
  }
}