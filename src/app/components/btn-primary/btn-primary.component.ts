import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  imports: [NgIf],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
