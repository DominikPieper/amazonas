import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, OverlayModule, FormsModule],
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }
}
