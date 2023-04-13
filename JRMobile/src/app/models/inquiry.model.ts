export interface InquiryInputData {
    areaDetail: string
    cityId: number
    districtId: number
    // description: string
    firstName: string
    houseDetail: string
    // interiorName: string
    lastName: string
    mobileNumber: string
    pincode: string
    secondNumber: string
    stateId: number
    dateOfBirth: Date
    // inquiryType: string
}

export interface InquiryResponse {
    id: number
    status: string
    desc: string
}

export interface InquiryList {
    areaDetail: string
    businessName: string
    cityId: number
    cityTitle: string
    createdOn: number
    description: string
    districtId: number
    districtTitle: string
    enquiryId: number
    firstName: string
    houseDetail: string
    interiorName: string
    lastName: string
    mobileNumber: string
    pincode: string
    secondNumber: string
    stateId: number
    stateTitle: string
    status: string
    inquiryType: string
    ownerName: string
    owner: number
}

export interface InquiryList {
    areaDetail: string
    businessName: string
    cityId: number
    cityTitle: string
    createdOn: number
    description: string
    districtId: number
    districtTitle: string
    enquiryId: number
    firstName: string
    houseDetail: string
    interiorName: string
    lastName: string
    mobileNumber: string
    pincode: string
    secondNumber: string
    stateId: number
    stateTitle: string
    status: string
}

export interface InquiryDetails {
    approveRejectDateByAdmin: number
    approveRejectDateBySiteManager: unknown
    areaDetail: string
    cityId: number
    clientDesc: unknown
    commissionindDesc: unknown
    commissioningDate: unknown
    completedDate: unknown
    completedDesc: unknown
    createdBy: number
    createdOn: number
    description: string
    districtId: number
    enquiryId: number
    firstName: string
    houseDetail: string
    installationDate: unknown
    installationDesc: unknown
    interiorName: string
    jrDesc: unknown
    lastName: string
    mobileNumber: string
    modifiedBy: number
    modifiedOn: number
    pincode: string
    provisioningDate: unknown
    provisioningDesc: unknown
    requirementDate: unknown
    requirementDesc: unknown
    secondNumber: string
    stateId: number
    status: string
}

export interface InquiryResponse {
    id: number
    status: string
    desc: string
}