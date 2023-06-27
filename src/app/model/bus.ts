export class Bus {
    busId: number
    name: string
    seat: number
    fromLocate: string
    toLocate: string

    constructor(
        busId: number,
        name: string,
        seat: number,
        fromLocate: string,
        toLocate: string
    ){
        this.busId = busId
        this.name = name
        this.seat = seat
        this.fromLocate = fromLocate
        this.toLocate = toLocate
    }
}
