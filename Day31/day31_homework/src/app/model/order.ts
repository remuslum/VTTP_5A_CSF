import { CartItem } from "./cartItem";

export interface Order {
    name:string,
    address:string,
    items:CartItem[]
}