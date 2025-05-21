import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TarjetasComponent } from './features/tarjetas/tarjetas.component';
import { PinComponent } from './features/pin/pin.component';
import { AvisoTarjetaComponent } from './features/aviso-tarjeta/aviso-tarjeta.component';
import { TarjetaInfoComponent } from './features/tarjeta-info/tarjeta-info.component';
import { TarjetaNuevaComponent } from './features/tarjeta-nueva/tarjeta-nueva.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pin', component: PinComponent },
    { path: 'aviso-tarjeta', component: AvisoTarjetaComponent },
    { path: 'tarjetas', component: TarjetasComponent},
    { path: 'tarjeta', component: TarjetaInfoComponent},
    { path: 'tarjeta-nueva', component: TarjetaNuevaComponent}
];
