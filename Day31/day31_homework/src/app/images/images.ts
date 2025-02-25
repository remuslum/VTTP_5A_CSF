import { Product } from "../model/product"

export const IMAGES:string[] = [
    'acorn_squash.png',
    'apple.png',
    'bell_pepper.png',
    'blueberries.png',
    'broccoli.png',
    'carrot.png',
    'celery.png',
    'chili_pepper.png',
    'corn.png',
    'eggplant.png',
    'harold.png',
    'lettuce.png',
    'mushroom.png',
    'onion.png',
    'potato.png',
    'pumpkin.png',
    'radish.png',
    'squash.png',
    'strawberry.png',
    'sugar_snap.png',
    'tomato.png',
    'zucchini.png'
]

export const PRODUCTS:Product[] = [
    {
        name : "apple",
        picture : IMAGES[1],
        price : 1.00
    },
    {
        name : "bell_pepper",
        picture : IMAGES[2],
        price : 2.00
    },
    {
        name : "blueberries",
        picture : IMAGES[3],
        price : 1.50
    },
    {
        name : "broccoli",
        picture : IMAGES[4],
        price : 3.00
    },
    {
        name : "carrot",
        picture : IMAGES[5],
        price : 4.00
    }
     
]

