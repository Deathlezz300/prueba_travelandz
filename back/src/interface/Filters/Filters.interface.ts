

export interface VehicleTypes {
    masterTransferTypeCode: MasterTransferTypeCode;
    masterCategoryCode:     MasterCategoryCode;
    masterVehicleCode:      string;
    name:                   string;
    description:            string;
}

export enum MasterCategoryCode {
    Prm = "PRM",
    Stnd = "STND",
}

export enum MasterTransferTypeCode {
    Prvt = "PRVT",
    Shrd = "SHRD",
}


export interface TransferTypes {
    code:        string;
    name:        string;
    description: string;
}


export interface HotelName {
    code:            string;
    name:            string;
    category?:       string;
    description?:    string;
    countryCode:     string;
    destinationCode: string;
    city:            string;
    coordinates:     Coordinates;
    address:         string;
    postalCode?:     string;
}

export interface Coordinates {
    latitude:  number | null;
    longitude: number | null;
}


export interface City {
    code:        string;
    name:        string;
    countryCode: string;
    language:    string;
}







