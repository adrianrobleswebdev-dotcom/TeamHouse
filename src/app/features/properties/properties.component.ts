import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MOCK_PROPERTIES } from '../home/data/properties.mock';

interface Characteristic {
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './properties.component.html'
})
export class PropertiesComponent {
  properties = MOCK_PROPERTIES;
  searchQuery = '';
  propertyType = 'CASA';
  
  characteristics:Characteristic[] = [
    { label: 'Alberca', selected: false },
    { label: 'Jardín', selected: true },
    { label: 'Seguridad', selected: false },
    { label: 'Gimnasio', selected: false },
  ];
  
  togglePropertyType(type: string) {
    this.propertyType = type;
  }
  
  toggleCharacteristic(char:Characteristic) {
    char.selected = !char.selected;
  }
}
