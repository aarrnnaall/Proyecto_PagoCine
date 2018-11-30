import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pago } from 'app/shared/model/pago.model';
import { PagoService } from './pago.service';
import { PagoComponent } from './pago.component';
import { PagoDetailComponent } from './pago-detail.component';
import { PagoUpdateComponent } from './pago-update.component';
import { PagoDeletePopupComponent } from './pago-delete-dialog.component';
import { IPago } from 'app/shared/model/pago.model';

@Injectable({ providedIn: 'root' })
export class PagoResolve implements Resolve<IPago> {
    constructor(private service: PagoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((pago: HttpResponse<Pago>) => pago.body));
        }
        return of(new Pago());
    }
}

export const pagoRoute: Routes = [
    {
        path: 'pago',
        component: PagoComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'proyectoPagoCineApp.pago.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'pago/:id/view',
        component: PagoDetailComponent,
        resolve: {
            pago: PagoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.pago.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'pago/new',
        component: PagoUpdateComponent,
        resolve: {
            pago: PagoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.pago.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'pago/:id/edit',
        component: PagoUpdateComponent,
        resolve: {
            pago: PagoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.pago.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const pagoPopupRoute: Routes = [
    {
        path: 'pago/:id/delete',
        component: PagoDeletePopupComponent,
        resolve: {
            pago: PagoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'proyectoPagoCineApp.pago.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
