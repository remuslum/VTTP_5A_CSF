export interface Item {
    item: string
    price: number
}


export interface CartSlice { 
    items: Item[]
    lastUpdated: number
}