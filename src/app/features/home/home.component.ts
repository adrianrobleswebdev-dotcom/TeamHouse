import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FeaturedPropertiesComponent } from './components/featured-properties/featured-properties.component';
import { GoogleReviewsComponent } from './components/google-reviews/google-reviews.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgClass, FeaturedPropertiesComponent, GoogleReviewsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    readonly searchType = signal<'venta' | 'renta'>('venta');
    readonly searchQuery = signal('');

    setSearchType(type: 'venta' | 'renta'): void {
        this.searchType.set(type);
    }

    onSearch(): void {
        console.log('Buscando:', this.searchType(), this.searchQuery());
        // TODO: navegar a /propiedades con query params
    }
}
