

export interface BookingResponse {
    bookings: Booking[];
}

export interface Booking {
    reference:             string;
    bookingFileId:         null;
    creationDate:          string;
    status:                string;
    modificationsPolicies: ModificationsPolicies;
    holder:                Holder;
    transfers:             Transfer[];
    clientReference:       string;
    remark:                string;
    invoiceCompany:        InvoiceCompany;
    supplier:              Supplier;
    totalAmount:           number;
    totalNetAmount:        number;
    pendingAmount:         number;
    currency:              string;
    links:                 Link[];
    paymentDataRequired:   boolean;
}

export interface Holder {
    name:    string;
    surname: string;
    email:   string;
    phone:   string;
}

export interface InvoiceCompany {
    code: string;
}

export interface Link {
    rel:    string;
    href:   string;
    method: string;
}

export interface ModificationsPolicies {
    cancellation: boolean;
    modification: boolean;
}

export interface Supplier {
    name:      string;
    vatNumber: string;
}

export interface Transfer {
    id:                          number;
    rateKey:                     string;
    status:                      string;
    transferType:                string;
    vehicle:                     Category;
    category:                    Category;
    pickupInformation:           PickupInformation;
    paxes:                       Pax[];
    content:                     Content;
    price:                       Price;
    cancellationPolicies:        CancellationPolicy[];
    factsheetId:                 null;
    arrivalFlightNumber:         string;
    departureFlightNumber:       null;
    arrivalShipName:             null;
    departureShipName:           null;
    arrivalTrainInfo:            null;
    departureTrainInfo:          null;
    transferDetails:             TransferDetail[];
    sourceMarketEmergencyNumber: string;
    links:                       Link[];
}

export interface CancellationPolicy {
    amount:         number;
    from:           string;
    currencyId:     string;
    isForceMajeure: boolean;
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
    type: string;
}

export interface TransferDetailInfo {
    id:          string;
    name:        string;
    description: string;
    type:        string;
}

export interface TransferRemark {
    type:        string;
    description: string;
    mandatory:   boolean;
}

export interface Pax {
    type: string;
    age:  number;
}

export interface PickupInformation {
    from:   From;
    to:     From;
    date:   string;
    time:   string;
    pickup: Pickup;
}

export interface From {
    code:        string;
    description: string;
    type:        string;
}

export interface Pickup {
    address:     null;
    number:      null;
    town:        null;
    zip:         null;
    description: string;
    altitude:    null;
    latitude:    number;
    longitude:   number;
    checkPickup: CheckPickup;
    pickupId:    null;
    stopName:    null;
    image:       null;
}

export interface CheckPickup {
    mustCheckPickupTime:   boolean;
    url:                   string;
    hoursBeforeConsulting: null;
}

export interface Price {
    totalAmount: number;
    netAmount:   number;
    currencyId:  string;
}

export interface TransferDetail {
    type:        string;
    direction:   string;
    code:        string;
    companyName: null;
}


export interface BookingList {
    bookings: Booking[];
}

export interface Booking {
    reference:             string;
    bookingFileId:         null;
    creationDate:          string;
    status:                string;
    modificationsPolicies: ModificationsPolicies;
    holder:                Holder;
    transfers:             Transfer[];
    clientReference:       string;
    remark:                string;
    totalAmount:           number;
    totalNetAmount:        number;
    pendingAmount:         number;
    currency:              string;
    links:                 Link[];
}

export enum Currency {
    Eur = "EUR",
}

export interface Holder {
    name:    string;
    surname: string;
    email:   string;
    phone:   string;
}

export interface Link {
    rel:    string;
    href:   string;
    method: string;
}

export interface ModificationsPolicies {
    cancellation: boolean;
    modification: boolean;
}


export interface Transfer {
    transferType:         string;
    vehicle:              Category;
    category:             Category;
    pickupInformation:    PickupInformation;
    price:                Price;
    cancellationPolicies: CancellationPolicy[];
    links:                Link[];
}

export interface CancellationPolicy {
    amount:         number;
    from:           string;
    currencyId:     string;
    isForceMajeure: boolean;
}

export interface Category {
    code: string;
}

export interface PickupInformation {
    from: From;
    to:   From;
    date: string;
    time: string;
}

export interface From {
    code: string;
    type: string;
}


export interface Price {
    totalAmount: number;
    netAmount:   number;
    currencyId:  string;
}


