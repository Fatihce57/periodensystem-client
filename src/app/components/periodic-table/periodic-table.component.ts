import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementService } from '../../services/element.service';
import { Element } from '../../models/element.model';
import { ElementDetailComponent } from '../element-detail/element-detail.component';

@Component({
  selector: 'app-periodic-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ElementDetailComponent],
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {
  private elementService = inject(ElementService);

  elements: Element[] = [];
  filteredElements: Element[] = [];
  aggregatzustandFilter: string = '';
  kategorieFilter: string = '';
  searchTerm: string = '';

  ngOnInit(): void {
    this.elementService.getAllElements().subscribe({
      next: (data) => {
        this.elements = data;
        this.filteredElements = data;
      },
      error: (err) => {
        console.error('Error loading elements:', err);
      }
    });
  }

    applyFilters(): void {
        const filters: { state?: string; category?: string; name?: string } = {};

        if (this.aggregatzustandFilter && this.aggregatzustandFilter !== '') {
            filters.state = this.aggregatzustandFilter;
        }

        if (this.kategorieFilter && this.kategorieFilter !== '') {
            filters.category = this.kategorieFilter;
        }

          if (this.searchTerm?.trim()) {
            filters.name = this.searchTerm.trim();
     }

        this.elementService.getAllElements(filters).subscribe({
            next: (data) => {
            this.filteredElements = data;
            },
            error: (err) => {
            console.error('Error loading filtered elements:', err);
            }
        });
    }


    getStateClass(state: string): string {
        switch (state?.toLowerCase()) {
            case 'fest':
            return 'fest';
            case 'flüssig':
            return 'flüssig';
            case 'gas':
            case 'gasförmig':
            return 'gas';
            default:
            return '';
        }
    }

    selectedElement: Element | null = null;

    showDetail(e: Element): void {
        this.selectedElement = e;
    }

    closeDetail(): void {
        this.selectedElement = null;
    }
}
