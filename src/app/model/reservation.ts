export class Reservation {
    id: number
    idClient: number
    idFormule: number
    date: Date

    constructor(id: number, idClient: number, idFormule: number, date: Date) {
        this.id = id
        this.idClient = idClient
        this.idFormule = idFormule
        this.date = date
    }
}