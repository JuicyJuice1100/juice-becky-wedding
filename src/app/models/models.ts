export interface Rsvp {
    invitationId: string;
    name: string;
    email: string;
    guests: Guest[];
    foodRestrictions: string;
}

export interface Invitation {
    id: string;
    name: string;
}

export interface Guest {
    name: string;
    foodRestrictions: string;
}