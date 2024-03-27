import { EnumTournamentType } from "../enums/tournament-type.enum";

export interface TournamentModel {
    idTournament: number;
    idTournamentType: EnumTournamentType;
    name: string;
    creationUser: number;
    creationDate: Date;
    modificationUser: number | null;
    modificationDate: Date | null;
    startDate: Date;
    endDate: Date;
    minPlayers: number;
    maxPlayers: number;
    confirmedPlayers: number | null;
    active: boolean;
}