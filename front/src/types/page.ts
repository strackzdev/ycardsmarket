export interface Page<TItem> {
    totalItems: number;
    pageSize: number;
    items: TItem[];
    currentPage: number;
    totalPages: number;
}