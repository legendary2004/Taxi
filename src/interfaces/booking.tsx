export interface booking {
    id: string,
    email: string;
    phone: string;
    date: string;
    time: string;
    origin: string;
    destination: string;
}

export interface confirmBooking {
    msg: string;
    confirmBooking: Function
}