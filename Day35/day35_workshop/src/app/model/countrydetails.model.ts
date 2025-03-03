export class CountryDetails {
    name:string
    mainWeather:string
    description:string
    windSpeed:number

    constructor(name:string, mainWeather:string, description:string, windSpeed:number){
        this.name = name
        this.mainWeather = mainWeather
        this.description = description
        this.windSpeed = windSpeed
    }
}