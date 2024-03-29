import { EnumCopmlaintPriority } from "../enums/complaint-priority.enum";
import { EnumComplaintType } from "../enums/complaint-type.enum";

export interface ComplaintModel {
    idComplaint: number;
    idComplaintType: EnumComplaintType;
    idPriority: EnumCopmlaintPriority;
    title: string | null;
    description: string | null;
    creationUser: number;
    creationDate: Date;
    modificationUser: number | null;
    modificationDate: Date | null;
    active: boolean;
}