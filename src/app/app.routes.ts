import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TarjetasComponent } from './features/tarjetas/tarjetas.component';
import { PinComponent } from './features/pin/pin.component';
import { AvisoTarjetaComponent } from './features/aviso-tarjeta/aviso-tarjeta.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pin', component: PinComponent },
    { path: 'aviso-tarjeta', component: AvisoTarjetaComponent },
    {path: 'tarjetas', component: TarjetasComponent}
];
