import React from "react";
import ReactDOM from "react-dom";

import test01 from "./export_01";

console.log("export default:" + test01);

import { name, age, sex } from "./export_02";

console.log(name);
console.log(age);
console.log(sex);

import * as test03 from "./export_03";

console.log(test03.nname);
console.log(test03.aage);
