export class Environment {
    id: string;
    name: any;

    constructor(id: string, name: any) {
        this.id = id;
        this.name = name;
    }

    static get(itens: Array<Environment>, id: string) {
        for (var item of itens) 
            if (item.id === id)
                return item;
        return new Environment('', '');
    }

}