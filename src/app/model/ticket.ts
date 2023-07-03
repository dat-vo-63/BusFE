import { Bill } from "./bill"
import { Seat } from "./seat"

export class Ticket {
    ticketId: number
    bill: Bill
    seats: Array<Seat>

    constructor(
        ticketId: number,
        bill: Bill,
        seats: Array<Seat>
    ) {
        this.ticketId = ticketId
        this.bill = bill
        this.seats = seats
    }
}
