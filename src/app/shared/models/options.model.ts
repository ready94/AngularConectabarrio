import { EnumMenuOptions } from "@shared/enums/enum-options-menu.enum";

export interface OptionsModel {
    idOption: EnumMenuOptions;
    value: string;
    icon: string;
    onlyAdmin: boolean;
}