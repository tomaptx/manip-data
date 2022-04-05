import { companiesData } from "./companies-data";
import { salesData } from "./sales-data";

//const before = document.getElementById("before");
//before.innerHTML = JSON.stringify(companiesData, null, 2);

//functions are here
//const manipulatedData = companiesData[0].fieldData;
//const manipulatedData = companiesData.map(function (e) { 
//const manipulatedData = companiesData.filter (function (e) { 
//    const firstLetter = e.fieldData.CompanyName.charAt(0); 
//    return firstLetter === "M";
//    return firstLetter === "M";
//    
//}).map(function (e) { 
//    return {
//        state: e.fieldData.State,
//        name: e.fieldData.CompanyName  
//    } 
//});

function clickMe(e) {
    alert(e.target.id);
};
const after = document.getElementById("after");

const createButton = function (e) {
    const button = document.createElement("button");
    button.innerHTML = e.fieldData.CompanyName;
    button.addEventListener("click", clickMe);
    button.type = "button";
    button.id = e.fieldData.Id;
    button.className = "col-2 btn btn-outline-primary m-1"

    after.appendChild(button);
}
companiesData.forEach( createButton )
//const keys = Object.keys(manipulatedData);

const isArray = Array.isArray(companiesData);
//console.log isArray;

after.innerHTML = JSON.stringify (manipulatedData, null, 2);

