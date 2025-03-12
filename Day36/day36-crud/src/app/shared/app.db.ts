import Dexie, { Table } from 'dexie'
import { Particulars } from '../model/particulars'

export class AppDB extends Dexie {

    particulars !: Table<Particulars,String>

    constructor(){ 
        super('particularsDB')
        this.version(1).stores({
            particulars: "badge_id,name,email"
        })
    }

    async addParticulars(item:Particulars){
        await this.particulars.put(item)
    }
}

export const db = new AppDB()