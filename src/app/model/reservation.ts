export class Reservation {
    id: number
    id_client: number
    id_formule: number
    date: Date

    constructor(id: number, id_client: number, id_formule: number, date: Date) {
        this.id = id
        this.id_client = id_client
        this.id_formule = id_formule
        this.date = date
    }
}
