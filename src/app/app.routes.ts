import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TarjetasComponent } from './features/tarjetas/tarjetas.component';
import { PinComponent } from './features/pin/pin.component';
import { AvisoTarjetaComponent } from './features/aviso-tarjeta/aviso-tarjeta.component';
import { TarjetaInfoComponent } from './features/tarjeta-info/tarjeta-info.component';
import { TarjetaNuevaComponent } from './features/tarjeta-nueva/tarjeta-nueva.component';
import { HistorialComponent } from './features/historial/historial.component';
import { Error400Component } from './features/errores/error-400/error-400.component';
import { Error401Component } from './features/errores/error-401/error-401.component';   
import { Error403Component } from './features/errores/error-403/error-403.component';  
import { Error404Component } from './features/errores/error-404/error-404.component';   
import { Error409Component } from './features/errores/error-409/error-409.component';
import { Error429Component } from './features/errores/error-429/error-429.component';
import { Error500Component } from './features/errores/error-500/error-500.component';
import { Error503Component } from './features/errores/error-503/error-503.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pin', component: PinComponent },
    { path: 'aviso-tarjeta', component: AvisoTarjetaComponent },
    { path: 'tarjetas', component: TarjetasComponent},
    { path: 'tarjeta', component: TarjetaInfoComponent},
    { path: 'tarjeta-nueva', component: TarjetaNuevaComponent},
    { path: 'historial', component: HistorialComponent},
    { path: 'error/400', component: Error400Component },
    { path: 'error/401', component: Error401Component },
    { path: 'error/403', component: Error403Component },
    { path: 'error/404', component: Error404Component },
    { path: 'error/409', component: Error409Component },
    { path: 'error/429', component: Error429Component },
    { path: 'error/500', component: Error500Component },
    { path: 'error/503', component: Error503Component },
];
