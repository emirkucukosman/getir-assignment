export interface FilterState {
  page: number;
  sort: string;
  order: "asc" | "desc";
  itemType: "mug" | "shirt";
  manufacturers: string[];
  tags: string[];
}
