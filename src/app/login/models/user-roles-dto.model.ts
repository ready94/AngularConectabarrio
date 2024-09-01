import { EnumRoles } from "@login/enums/roles.enum";

export interface UserRolesDTO {
    idRole: EnumRoles;
    translationKey: string;
}