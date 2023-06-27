export class Schedule {
    scheduleId:number
    startTime: string
    endTime: string
    totalSeat: number
    seatLeft: number
    startDate: number

    constructor(
        scheduleId:number,
        startTime: string,
        endTime: string,
        totalSeat: number,
        seatLeft: number,
        startDate: number
    ){
        this.scheduleId = scheduleId
        this.startTime = startTime
        this.endTime = endTime
        this.totalSeat = totalSeat
        this.seatLeft = seatLeft
        this.startDate = startDate
    }
}
