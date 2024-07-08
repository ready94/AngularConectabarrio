import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrl: './custom-spinner.component.scss',
})
export class CustomSpinnerComponent implements OnInit {
  @Input() message = '';
  @Input() partial = false;
  constructor() {}

  ngOnInit(): void {}
}
