export interface Item {
    name: string;
    resultCount: number;
}

export interface Result {
    searchTerm: string;
    images: string[];
    timestamp: number;
    fromCache?: boolean;
}
