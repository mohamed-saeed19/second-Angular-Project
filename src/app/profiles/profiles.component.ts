import { Component } from '@angular/core';
import * as data from '../users.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profiles',
  imports: [CommonModule, FormsModule],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css',
})
export class ProfilesComponent {
  dataItems: any[] = (data as any).default;
  filteredItems: any[] = [];
  searchEmail: string = '';
  showResetButton: boolean = false;

  constructor() {
    this.filteredItems = [...this.dataItems];
  }

  filterUsers() {
    if (this.searchEmail) {
      this.filteredItems = this.dataItems.filter((item) =>
        item.email.toLowerCase().includes(this.searchEmail.toLowerCase())
      );
      this.showResetButton = true;
    } else {
      this.filteredItems = [...this.dataItems];
      this.showResetButton = false;
    }
  }

  resetSearch() {
    this.searchEmail = '';
    this.filteredItems = [...this.dataItems];
    this.showResetButton = false;
  }
}
