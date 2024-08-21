export interface TreeItem {
    id: number, 
    parent: string | number,
    type?: string | null,
    children?: TreeItem[] | []
}

interface TypeTreeStore {
    originalData: TreeItem[];
}

export class TreeStore implements TypeTreeStore {
    originalData: TreeItem[];
    tree;
    
    constructor(data: TreeItem[]) {
        this.originalData = data;
        this.tree = this.buildTree(data);
    }
    
    private buildTree(data: TreeItem[]) {
        const tree = new Map<number | string, TreeItem>();
        
        for (let i = 0; i < data.length; i++) {
            const item: TreeItem = data[i];
            tree.set(item.id, { ...item, children: [] });
    
            if (item.parent !== null && item.parent !== undefined) {
                tree.get(item.parent)?.children?.push(tree.get(item.id));
            }
        }

        return tree;
    }

    public getAll(): TreeItem[] {
        return this.originalData;
    }

    public getId(id: number): TreeItem | undefined {        
        const currentItem = this.tree.get(id)
        if (!currentItem) return undefined;

        const { children, ...item } = currentItem;
        return item
    }

    public getChildren(id: number): (TreeItem | undefined)[] {
        return this.tree.get(id)?.children?.map(item => {
            return this.getId(item.id)
        }) || [];
    }

    private recursiveChildren(id: number): TreeItem[]  {
        let result = [] as TreeItem[];
        const currentItem = this.tree.get(id)
        const onlyItem = this.getId(id)
        
        if(currentItem && onlyItem) {
            result.push(onlyItem);
            const children = currentItem?.children || []

            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const childResults = this.recursiveChildren(child.id);
                result.push(...childResults)
            } 
        } 
        
        return result;
    }

    public getAllChildren(id: number): (TreeItem | undefined)[]  {
        const result: TreeItem[] = [];
        const currentItem = this.tree.get(id);

        if(!currentItem) return []

        const children = currentItem?.children || []
        
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const allChildren = this.recursiveChildren(child.id);
            allChildren.shift();
            result.push(...allChildren);
        }

        return [...children, ...result];
    }

    public getAllParents(id: number): TreeItem[] | [] {
        const parents: TreeItem[] = [];
        let currentItem = this.getId(id);

        while (currentItem && currentItem.parent !== 'root') {
            parents.push(currentItem);
            
            if (typeof currentItem.parent === 'number') {
                currentItem = this.getId(currentItem?.parent);
            } else {
                break; 
            }
        }
    
        return parents;
    }
}