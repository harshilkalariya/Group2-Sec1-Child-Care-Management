export interface VerifyOTP {
    username: string
    otp: string
}

export interface ResetPassword {
    username: string
    otp: string
    password: string
}

export interface currentUser {
    businessId: string
    businessName: string
    email: string
    location: UserLocation
    locationId: number
    mobileNumber: string
    role: string
    userId: number
    ownerBusinessName: string
    ownerId: number
}

export interface UserLocation {
    cityDescription: string
    cityId: number
    cityTitle: string
    districtId: number
    stateId: number
    status: string
}

export interface FeedbackData {
    type: string
    desc: string
}