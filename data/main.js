import {coucou} from "./index.js";
import {test} from "./index.js";
import * as users from "./user.json";

coucou();
const obj = JSON.parse(users);

console.log(obj.first_name);
