import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  templateDrivenForms,
  templateDrivenFormsViewProviders,
} from '@amazonas/shared/forms';
import { AddressModel } from '../models/address.model';

@Component({
  selector: 'am-address',
  standalone: true,
  imports: [CommonModule, templateDrivenForms],
  viewProviders: [templateDrivenFormsViewProviders],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Input() address?: AddressModel;
}
