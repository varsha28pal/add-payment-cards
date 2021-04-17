import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ADD_CARD_URL, HEADER } from "../../../app-component.constant";
import { IAddCardResponse } from "../interfaces/add-cards.interface";

@Injectable({
    providedIn: 'root'
})
export class AddCardService {
    constructor(protected _http: HttpClient) { }

    public addCard(params: any): Observable<IAddCardResponse> {
        return this._http.post<IAddCardResponse>(ADD_CARD_URL, {}, {
            headers: HEADER,
            params: params
        });
    }
}