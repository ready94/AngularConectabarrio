import { EnumTournamentType } from "@activities/enums/tournament-type.enum";

export class EventDTO{
    idEvent: number;
    idEventType: EnumTournamentType;
    eventType: string
    idEventSubCategory: number;
    eventSubCategory: string;
    idEventCategory: number;
    eventCategory: string;
    location: string;
    maxPerson: number;
    actualPerson: number;
    creationUser: number;
    eventDate: Date;
    creationDate: Date;
    alreadyIn: boolean;
    isTheCreationUser: boolean
}