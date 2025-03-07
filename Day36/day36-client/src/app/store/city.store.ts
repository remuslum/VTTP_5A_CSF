import { Injectable } from "@angular/core";
import { City } from "../model/city";
import { ComponentStore } from '@ngrx/component-store'
import { from, Observable, switchMap, tap } from "rxjs";
import { liveQuery } from "dexie";
import { db } from "../shared/app.db";

export interface CityState {
    cities: City[],
    loading: boolean
}

@Injectable({
    providedIn:'root'
})

export class CityStore extends ComponentStore<CityState> {

    constructor() {
        super({cities:[],loading:false})
    }

    // Selectors
    readonly cities$ = this.select(state => state.cities)
    readonly loading$ = this.select(state => state.loading)

    // Updaters
    readonly setLoading = this.updater((state, loading:boolean) => ({...state, loading}))
    readonly setCities = this.updater<City[]>(
        (state, cities : City[]) => ({...state,cities})
    )

    // Effects
    readonly loadCities = this.effect((trigger$: Observable<void>) =>
        trigger$.pipe(
            tap(() => this.setLoading(true)),
            switchMap(() =>
                from(liveQuery(() => db.cities.reverse().toArray())).pipe(
                    tap({
                        next: (cities) => this.setCities(cities),
                        error: (error) => this.setLoading(false)
                    })
                )
            )
        )
    );
    //add new city
    readonly addNewCity = this.effect((city$: Observable<City>) =>
        city$.pipe(
            switchMap((city) =>
                from(db.addCity(city)).pipe(
                    tap(() => this.loadCities())
                )
            )
        )
    );
}