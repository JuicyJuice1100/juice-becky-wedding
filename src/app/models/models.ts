export interface Rsvp {
    invitationId: string;
    name: string;
    email: string;
    guests: string[];
    foodRestrictions: string[];
}

export interface Invitation {
    id: string;
    name: string;
}