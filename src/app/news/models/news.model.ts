import { EnumNewsCategory } from "../enums/news-category.enum";

export interface NewsModel {
    idNew: number;
    idCategory: EnumNewsCategory;
    name: string | null;
    description: string | null;
    creationUser: number;
    creationDate: Date;
    modificationUser: number | null;
    modificationDate: Date | null;
    startDate: Date;
    endDate: Date;
    active: boolean;
}