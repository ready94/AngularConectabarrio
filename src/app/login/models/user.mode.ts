import { EnumRoles } from "@login/enums/roles.enum";

export interface UserModel {
    idUser: number;
    idRole: EnumRoles;
    name: string | null;
    surname: string | null;
    username: string | null;
    password: string | null;
    email: string | null;
    creationUser: number;
    creationDate: Date;
    modificationUser: number | null;
    modificationDate: Date | null;
    active: boolean;
    isBlocked: boolean;
}