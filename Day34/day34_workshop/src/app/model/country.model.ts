export class Country {
    name:string;
    lat:number;
    lon:number;
    mainWeather:string;
    description:string;

    constructor(name:string, lat:number, lon:number, mainWeather:string, description:string){
        this.name = name,
        this.lat = lat,
        this.lon = lon,
        this.mainWeather = mainWeather,
        this.description = description
    }
}