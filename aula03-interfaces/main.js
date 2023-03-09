"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../aula02-classes/person");
var person_dao_1 = require("./person-dao");
var personDao = new person_dao_1.PersonDao();
var person = new person_1.Person("srdgfghfkj");
personDao.insert(person);
//# sourceMappingURL=main.js.map