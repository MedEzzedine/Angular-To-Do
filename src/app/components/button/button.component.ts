import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() colorIndex: number = 0;
  @Output() btnClick = new EventEmitter();

  hover: boolean;
  buttonColors = [
    [
      //Add button color
      "#0b5ed7",
      "#0d6efd"
    ],
    [
      //Close button color
      "#cc254c",
      "#f52040"
    ]
  ];

  constructor() { 
    this.hover = false;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
