export interface DaoInterface{

    tableName: string;

    update(object:any):boolean;
    insert(object:any):boolean;
    delete(id:number):boolean;
    find(id:number):any;
    findAll():[any];
    
}