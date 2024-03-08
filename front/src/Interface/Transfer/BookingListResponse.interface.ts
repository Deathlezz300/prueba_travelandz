export interface BookingListResponse {
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