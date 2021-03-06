import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { IPago } from 'app/shared/model/pago.model';
import { PagoService } from './pago.service';
import { ITarjeta } from 'app/shared/model/tarjeta.model';
import { TarjetaService } from 'app/entities/tarjeta';

@Component({
    selector: 'jhi-pago-update',
    templateUrl: './pago-update.component.html'
})
export class PagoUpdateComponent implements OnInit {
    private _pago: IPago;
    isSaving: boolean;

    tarjetas: ITarjeta[];
    created: string;
    updated: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private pagoService: PagoService,
        private tarjetaService: TarjetaService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ pago }) => {
            this.pago = pago;
        });
        this.tarjetaService.query().subscribe(
            (res: HttpResponse<ITarjeta[]>) => {
                this.tarjetas = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.pago.created = moment(this.created, DATE_TIME_FORMAT);
        this.pago.updated = moment(this.updated, DATE_TIME_FORMAT);
        if (this.pago.id !== undefined) {
            this.subscribeToSaveResponse(this.pagoService.update(this.pago));
        } else {
            this.subscribeToSaveResponse(this.pagoService.create(this.pago));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IPago>>) {
        result.subscribe((res: HttpResponse<IPago>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackTarjetaById(index: number, item: ITarjeta) {
        return item.id;
    }
    get pago() {
        return this._pago;
    }

    set pago(pago: IPago) {
        this._pago = pago;
        this.created = moment(pago.created).format(DATE_TIME_FORMAT);
        this.updated = moment(pago.updated).format(DATE_TIME_FORMAT);
    }
}
