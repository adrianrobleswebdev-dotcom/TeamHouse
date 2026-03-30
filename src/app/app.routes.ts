import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { HomeComponent } from './features';
import { PropertyDetailsComponent } from './features/property-details/property-details.component';
import { PropertiesComponent } from './features/properties/properties.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'properties', component: PropertiesComponent },
            { path: 'property/:id', component: PropertyDetailsComponent }
        ]
    }
];
