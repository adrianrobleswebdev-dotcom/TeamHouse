import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
    label: string;
    path: string;
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    readonly navItems = signal<NavItem[]>([
        { label: 'PROPIEDADES', path: '/properties' },
        { label: 'NOSOTROS', path: '/nosotros' },
        { label: 'CONTACTO', path: '/contacto' },
    ]);

    readonly isMenuOpen = signal(false);
    readonly isScrolled = signal(false);

    // @HostListener('window:scroll')
    // onWindowScroll(): void {
    //     this.isScrolled.set(window.scrollY > 50);
    // }

    toggleMenu(): void {
        this.isMenuOpen.update(open => !open);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
}
