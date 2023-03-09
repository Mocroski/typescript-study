import { Person } from '../aula02-classes/person';
import { Dao } from './dao';
import { DaoInterface } from './dao.interface';

let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person("mike");

dao.insert(person);

//generics transforma uma classe em generica assim podendo trabalhar com outros objetos no mesmo DAO/bean