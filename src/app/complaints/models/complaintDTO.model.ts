import { EnumComplaintPriority } from "../enums/complaint-priority.enum";
import { EnumComplaintType } from "../enums/complaint-type.enum";

export interface ComplaintDTO {
    idComplaintType: EnumComplaintType;
    idPriority: EnumComplaintPriority;
    title: string | null;
    description: string | null;
}