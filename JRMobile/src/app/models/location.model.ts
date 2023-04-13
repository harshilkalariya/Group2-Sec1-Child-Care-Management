export interface StateList {
    stateDescription: string
    stateId: number
    stateTitle: string
    status: string
    code: string
}

export interface DistrictList {
    districtDescription: string
    districtId: number
    districtTitle: string
    stateId: number
    status: string
}

export interface CityList {
    cityDescription: string
    cityId: number
    cityTitle: string
    districtId: number
    stateId: number
    status: string
}