import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Property } from '../../interfaces/property.interface';
import { MOCK_PROPERTIES } from '../../data/properties.mock';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-properties.component.html',
  styleUrl: './featured-properties.component.css'
})
export class FeaturedPropertiesComponent {
  private readonly allProperties: Property[] = MOCK_PROPERTIES
    .toSorted((a, b) => b.likes - a.likes);

 
  private currentPage = signal<number>(0);
  private readonly BATCH_SIZE = 3;


  visibleProperties = computed(() => {
    const start = this.currentPage() * this.BATCH_SIZE;
    return this.allProperties.slice(start, start + this.BATCH_SIZE);
  });


  hasMore = computed(() =>
    (this.currentPage() + 1) * this.BATCH_SIZE < this.allProperties.length
  );

 
  hasPrevious = computed(() =>
    this.currentPage() > 0
  );

  // Avanzar a la siguiente página (reemplaza los 3 actuales)
  loadMore() {
    this.currentPage.update(page => page + 1);
  }

  // Retroceder a la página anterior
  loadPrevious() {
    this.currentPage.update(page => page - 1);
  }
}
