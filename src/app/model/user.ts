export class User {
    userId: number
    userName: string
    email: string
    password: string
    phoneNumber: string
    address: string
    isActive: string
    userBalance: number

    constructor(
        userId: number,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    isActive: string,
    userBalance: number
    ){
        this.userId = userId
        this.userName = userName
        this.password = password
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
        this.isActive = isActive
        this.userBalance = userBalance
    }
}
