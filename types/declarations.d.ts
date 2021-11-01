export interface Business {
    alias: string;
    categories: Category[];
    coordinates: Coordinates;
    display_phone: string;
    distance: number;
    id: string;
    image_url: string;
    is_closed: boolean;
    location: Location;
    name: string;
    phone: string;
    price: string;
    rating: number;
    review_count: number;
    transactions: string[];
    url: string;
    hours: [ { hours_type: string, is_open_now: boolean, open: [ { is_overnight: boolean, start: string, end: string, day: number } ] } ]
}

export interface Category {
    alias: string;
    title: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Location {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    country: string;
    display_address: string[];
    state: string;
    zip_code: string;
}

export type Review = {
    id: string;
    rating: number;
    user: {
        id: string;
        profile_url: string;
        image_url: string;
        name: string;
    };
    text: string;
    time_created: string;
    url: string;
}

export type BusinessDetails = {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    url: string;
    phone: string;
    display_phone: string;
    review_count: number;
    categories: {
        alias: string;
        title: string;
    }[];
    rating: number;
    location: {
        address1: string;
        address2: string;
        address3: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
        display_address: string[];
        cross_streets: string;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    photos: string[];
    price: string;
    hours: {
        open: {
            is_overnight: boolean;
            start: string;
            end: string;
            day: number;
        }[];
        hours_type: string;
        is_open_now: boolean;
    }[];
    transactions: any[];
    special_hours: {
        date: string;
        is_closed?: any;
        start: string;
        end: string;
        is_overnight: boolean;
    }[];
}