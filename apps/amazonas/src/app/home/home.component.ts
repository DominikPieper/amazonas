import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

@Component({
  selector: 'am-home',
  standalone: true,
  imports: [CommonModule, PurchaseFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
