import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-element-detail',
  standalone: true,
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent {
  @Input() element!: Element;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
