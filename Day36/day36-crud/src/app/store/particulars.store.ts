import { Injectable } from "@angular/core";
import { Particulars } from "../model/particulars";
import { ComponentStore } from '@ngrx/component-store'
import { from, Observable, switchMap, tap } from "rxjs";
import { db } from "../shared/app.db";
import { liveQuery } from "dexie";

export interface ParticularsState {
    particularsList : Particulars[]
}

@Injectable({
    providedIn: 'root'
})

export class ParticularsStore extends ComponentStore<ParticularsState> {

    constructor(){
        super({particularsList:[]})
    }

    // Read
    readonly particulars$ = this.select(state => state.particularsList)

    // Load
    readonly loadParticulars = this.effect((trigger$: Observable<void>) =>
        trigger$.pipe(
            switchMap(() =>
                // Return the observable created from `liveQuery()`
                from(liveQuery(() => db.particulars.toArray())).pipe(
                    tap({
                        next: (particulars) => this.setParticulars(particulars),
                        error: (error) => console.error(error)
                    })
                )
            )
        )
    )

    // Update 
    readonly setParticulars = this.updater<Particulars[]>(
        (state, particulars:Particulars[]) => 
        ({...state, particulars})
    )

    // Create
    readonly addNewParticulars = this.effect((particulars$:Observable<Particulars>) => 
        particulars$.pipe(
            switchMap((particulars) => 
                from(db.addParticulars(particulars)).pipe(
                    tap(() => this.loadParticulars)
                )
            )
        )
    )


}