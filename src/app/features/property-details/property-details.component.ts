import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MOCK_PROPERTIES } from '../home/data/properties.mock';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
  });

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      alert('¡Mensaje enviado correctamente!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  property: any;
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const match = MOCK_PROPERTIES.find(p => p.id === id);
      
      if (match) {
        this.property = {
          img: match.img,
          title: match.location.split(',')[0],
          status: match.status,
          location: match.location,
          price: match.price,
          priceLabel: match.status === 'EN VENTA' ? 'Precio de Venta' : 'Precio de Renta',
          description: `Esta impresionante propiedad en ${match.location.split(',')[0]} representa el equilibrio perfecto entre lujo, confort y diseño contemporáneo. Con acabados de primera calidad, espacios amplios e iluminados naturalmente, y una distribución inteligente, esta residencia ha sido diseñada para quienes buscan un estilo de vida exclusivo en una de las zonas más privilegiadas de la ciudad.`,
          
          gallery: [
            match.img,
            'https://images.unsplash.com/photo-1600566752355-3979ff69a3cf?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600607687644-c7171b42398f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
          ],
          
          amenities: [
            { icon: 'security', label: 'Seguridad 24/7' },
            { icon: 'pool', label: 'Alberca Techada' },
            { icon: 'park', label: 'Jardines Privados' },
            { icon: 'fitness_center', label: 'Gimnasio Pro' },
            { icon: 'meeting_room', label: 'Co-working Space' },
            { icon: 'local_parking', label: 'Estacionamiento Visitas' }
          ],

          attributes: [
            { id: 'beds', label: match.details[0]?.bedrooms || '-', icon: 'bed' },
            { id: 'baths', label: match.details[0]?.bathrooms || '-', icon: 'bathtub' },
            { id: 'area', label: match.details[0]?.constructionarea || '-', icon: 'straighten' },
            { id: 'levels', label: '2 Niveles', icon: 'layers' }
          ]
        };
      } else {
        this.property = null;
      }
    });
  }
}
