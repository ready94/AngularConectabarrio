import { EnumRoles } from "@login/enums/roles.enum";

export interface LoginDto {
    idUser: number;
    userName: string;
    idRole: EnumRoles;
}