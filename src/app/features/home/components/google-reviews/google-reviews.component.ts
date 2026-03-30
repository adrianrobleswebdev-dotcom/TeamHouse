import { Component } from '@angular/core';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  imports: [],
  templateUrl: './google-reviews.component.html',
})
export class GoogleReviewsComponent {
  reviews = [
    {
      name: 'Andrés Pérez',
      time: 'hace 2 semanas',
      avatar: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=150',
      text: '"Excelente asesoría en la compra de mi primer departamento. Muy profesionales y atentos a cada detalle del proceso legal."'
    },
    {
      name: 'Andrea Bravo',
      time: 'hace 1 mes',
      avatar: 'https://img.freepik.com/foto-gratis/mujer-joven-hermosa-exito-sonriendo-mirando-camara-cruzar-brazos-sobre-pecho-sobre-la-luz-de-fondo_176420-10103.jpg?w=150',
      text: '"Lograron vender mi casa en tiempo récord y a un excelente precio. Totalmente recomendados si buscas seriedad y resultados reales."'
    },
    {
      name: 'Carlos Ruiz',
      time: 'hace 3 semanas',
      avatar: 'https://img.freepik.com/foto-gratis/joven-barbudo-gafas-camisa-posando-sobre-pared-ligera_176420-33230.jpg?w=150',
      text: '"La mejor experiencia en bienes raíces que he tenido. Transparencia y confianza total. Me ayudaron a encontrar la oficina perfecta para mi empresa."'
    }
  ];
}
