import { Injectable } from "@angular/core";
import { CartSlice, Item } from "./models";
import { ComponentStore } from "@ngrx/component-store";

const INIT_STATE: CartSlice = {
    items: [],
    lastUpdated: 0
}

@Injectable()
export class CartStore extends ComponentStore<CartSlice>{
    
    constructor() {
        // Pass the initial state when it is first created
        super(INIT_STATE)
    }

    // reducers/mutators -> updater returns a function
    // addToCart(newItem:Item) -> method signature
    // Can only have one parameter
    readonly addToCart = this.updater<Item>(
        (store: CartSlice, itemToAdd:Item) => {
            // how to add newItem to store
            // You must not update store, you must create a new copy so that the changes will be detected
            // const newStore:CartSlice = {
            //     items: [...store.items],
            //     lastUpdated: Date.now()
            // }
            // newStore.items.push(itemToAdd)
            // return newStore

            // Faster way to write
            return {
                items: [...store.items, itemToAdd],
                lastUpdated: Date.now()
            // this "as" is just to imply that the return value is a CartSlice
            } as CartSlice
        }
    )

    // selectors/queries -> Getting data out
    // countItemsInCart(): Observable<number>
    readonly countItemsInCart = this.select<number>(
        // Pass a function to tell it how to get this result
        (store:CartSlice) => {
            return store.items.length
        }
    )

    // deleteItemFromCart(string)
    readonly deleteItemFromCart = this.updater<string>(
        (store:CartSlice, itemToDelete:string) => {
            return {
                lastUpdated:Date.now(),
                items: store.items.filter(i => i.item != itemToDelete)
            }
        }
    ) 

    // Observable<Item[]>
    // Do not update anything inside a select
    readonly getItems = this.select<Item[]>(
        (store:CartSlice) => store.items
    )
}