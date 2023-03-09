import { Person } from './../aula02-classes/person';
import { PersonDao } from './person-dao';
import { DaoInterface } from './dao.interface';

let personDao : DaoInterface = new PersonDao();

let person: Person = new Person("srdgfghfkj");

personDao.insert(person);

//interfaces servem como um contrato de metodos
//metodos em interface nao podem ter corpo
//todo metod de interface é abstrato
//atributos na interface sao constantes