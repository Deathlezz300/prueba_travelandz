

export interface Transfer {
    search:   Search;
    services: Service[];
}

export interface Search {
    language:  string;
    departure: ComeBack;
    comeBack:  ComeBack;
    occupancy: Occupancy;
    from:      From;
    to:        From;
}

export interface ComeBack {
    date: string;
    time: string;
}

export interface From {
    code:        string;
    description: Description;
    type:        FromType;
}

export enum Description {
    HMJaimeIII = "HM Jaime III",
    TESTMajorcaPalmaAirport = "TEST - Majorca - Palma Airport",
}

export enum FromType {
    Atlas = "ATLAS",
    Iata = "IATA",
}

export interface Occupancy {
    adults:   number;
    children: number;
    infants:  number;
}

export interface Service {
    id:                   number;
    direction:            string;
    transferType:         string;
    vehicle:              Category;
    category:             Category;
    pickupInformation:    PickupInformation;
    minPaxCapacity:       number;
    maxPaxCapacity:       number;
    content:              Content;
    price:                Price;
    rateKey:              string;
    cancellationPolicies: CancellationPolicy[];
    links:                Link[];
    factsheetId:          number;
}

export interface CancellationPolicy {
    amount:         number;
    from:           string;
    currencyId:     string;
    isForceMajeure: null | any; 
}

export interface Category {
    code: string;
    name: string;
}

export interface Content {
    vehicle:                  Category;
    category:                 Category;
    images:                   Image[];
    transferDetailInfo:       TransferDetailInfo[];
    customerTransferTimeInfo: any[];
    supplierTransferTimeInfo: any[];
    transferRemarks:          TransferRemark[];
}

export interface Image {
    url:  string;
    type: ImageType;
}

export enum ImageType {
    Extralarge = "EXTRALARGE",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
}

export interface TransferDetailInfo {
    id:          string;
    name:        string;
    description: string;
    type:        TransferDetailInfoType;
}

export enum TransferDetailInfoType {
    GeneralInfo = "GENERAL_INFO",
}

export interface TransferRemark {
    type:        string;
    description: string;
    mandatory:   boolean;
}

export interface Link {
    rel:    Rel;
    href:   Href;
    method: Method;
}

export enum Href {
    Availability = "/availability",
    Booking = "/booking",
}

export enum Method {
    Get = "GET",
    Post = "POST",
}

export enum Rel {
    Confirm = "confirm",
    Self = "self",
}

export interface PickupInformation {
    from:   From;
    to:     From;
    date:   string;
    time:   string;
    pickup: Pickup;
}

export interface Pickup {
    address:     null | any;
    number:      null | any;
    town:        null | any;
    zip:         null | any;
    description: string;
    altitude:    null | any;
    latitude:    null | any;
    longitude:   null | any;
    checkPickup: CheckPickup;
    pickupId:    null | any;
    stopName:    null | any;
    image:       null | any;
}

export interface CheckPickup {
    mustCheckPickupTime:   boolean;
    url:                   null | string;
    hoursBeforeConsulting: null | any;
}

export interface Price {
    totalAmount: number;
    netAmount:   null | number;
    currencyId:  string;
}


export interface BookingBody {
    language:        string;
    holder:          Holder;
    transfers:       Transfer[];
    clientReference: string;
    welcomeMessage:  string;
    remark:          string;
}

export interface Holder {
    name:    string;
    surname: string;
    email:   string;
    phone:   string;
}

export interface Transfer {
    rateKey:         string;
    transferDetails: TransferDetail[];
}

export interface TransferDetail {
    type:        string;
    direction:   string;
    code:        string;
    companyName: string;
}


