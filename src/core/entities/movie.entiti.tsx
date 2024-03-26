export interface Movie {
    id: number;
    title: string;
    description: string;
    relaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}


export interface FullMovie extends Movie {
    generes: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}