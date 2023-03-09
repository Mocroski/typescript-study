export interface DaoInterface<T>{

    tableName: string;

    update(object:T):boolean;
    insert(object:T):boolean;
    delete(id:number):boolean;
    find(id:number):T;
    findAll():[T];
    
}