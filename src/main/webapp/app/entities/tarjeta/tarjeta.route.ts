import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tarjeta } from 'app/shared/model/tarjeta.model';
import { TarjetaService } from './tarjeta.service';
import { TarjetaComponent } from './tarjeta.component';
import { TarjetaDetailComponent } from './tarjeta-detail.component';
import { TarjetaUpdateComponent } from './tarjeta-update.component';
import { TarjetaDeletePopupComponent } from './tarjeta-delete-dialog.component';
import { ITarjeta } from 'app/shared/model/tarjeta.model';

@Injectable({ providedIn: 'root' })
export class TarjetaResolve implements Resolve<ITarjeta> {
    constructor(private service: TarjetaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((tarjeta: HttpResponse<Tarjeta>) => tarjeta.body));
        }
        return of(new Tarjeta());
    }
}

export const tarjetaRoute: Routes = [
    {
        path: 'tarjeta',
        component: TarjetaComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'proyectoPagoCineApp.tarjeta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tarjeta/:id/view',
        component: TarjetaDetailComponent,
        resolve: {
            tarjeta: TarjetaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.tarjeta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tarjeta/new',
        component: TarjetaUpdateComponent,
        resolve: {
            tarjeta: TarjetaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.tarjeta.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'tarjeta/:id/edit',
        component: TarjetaUpdateComponent,
        resolve: {
            tarjeta: TarjetaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.tarjeta.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tarjetaPopupRoute: Routes = [
    {
        path: 'tarjeta/:id/delete',
        component: TarjetaDeletePopupComponent,
        resolve: {
            tarjeta: TarjetaResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.tarjeta.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
