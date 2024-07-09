import { EnumTournamentType } from "@activities/enums/tournament-type.enum";

export class ActivitiesModel{
    idEvent: number;
    idEventType: EnumTournamentType;
    idEventSubCategory: number;
    location: string;
    maxPerson: number;
    actualPerson: number;
    creationUser: number;
    eventDate: Date;
    creationDate: Date;
}