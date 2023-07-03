export class Schedule {
    scheduleId:number
    startTime: string
    endTime: string
    totalSeat: number
    seatLeft: number
    startDate: number
    departure: string
    destination: string

    constructor(
        scheduleId:number,
        startTime: string,
        endTime: string,
        totalSeat: number,
        seatLeft: number,
        startDate: number,
        departure: string,
        destination: string
    ){
        this.scheduleId = scheduleId
        this.startTime = startTime
        this.endTime = endTime
        this.totalSeat = totalSeat
        this.seatLeft = seatLeft
        this.startDate = startDate
        this.departure = departure
        this.destination = destination
    }
}
