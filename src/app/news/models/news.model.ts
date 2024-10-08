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
    url: string | null;

    category: string | null;

}

export interface GoogleNewsModel {
    author: string | null;
    content: string | null;
    description: string | null;
    publishedAt: Date;
   // source: Source;
    title: string | null;
    url: string | null;
    urlToImage: string | null;
}

export interface Source {
    id: number | null;
    name: string | null;
}

export interface NewsResponse {
    articles: GoogleNewsModel[];
}