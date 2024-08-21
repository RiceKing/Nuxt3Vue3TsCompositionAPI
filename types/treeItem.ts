export interface TreeItem {
    id: number, 
    parent: string | number,
    type?: string | null,
    children?: TreeItem[] | []
}