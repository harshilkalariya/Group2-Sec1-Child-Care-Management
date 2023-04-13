export interface productAll {
    id: number,
    variant: number,
    variantName: string,
    size: number,
    sizeName: string,
    description: string,
    series: Series[],
    uniqueFrame: string[],
    uniqueFrameColor: string[],
    uniqueGlassColor: string[]
}

export interface Series {
    seriesName: string,
    id: number,
    display: boolean
    frame: Frame[]
}

export interface Frame {
    frameName: string,
    id: number,
    display: boolean,
    frameColor: Color[],
    glassColor: Color[]
}

export interface Color {
    colorName: string,
    id: number,
    display: boolean,
}

export interface HexColorList {
    code: string,
    createdBy: number,
    createdOn: string,
    id: number,
    modifiedBy: number,
    modifiedOn: string,
    name: string,
}

export interface IconShape {
    createdBy: number,
    createdOn: string,
    id: number,
    modifiedBy: number,
    modifiedOn: string,
    name: string,
    status: boolean
}

export interface HexCodeList {
    code: string,
    createdBy: number,
    createdOn: string,
    id: number,
    modifiedBy: number,
    modifiedOn: string,
    name: string,
}