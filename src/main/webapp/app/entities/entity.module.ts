import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProyectoPagoCineClienteModule } from './cliente/cliente.module';
import { ProyectoPagoCineTarjetaModule } from './tarjeta/tarjeta.module';
import { ProyectoPagoCinePagoModule } from './pago/pago.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ProyectoPagoCineClienteModule,
        ProyectoPagoCineTarjetaModule,
        ProyectoPagoCinePagoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoPagoCineEntityModule {}
