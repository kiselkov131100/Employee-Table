"use strict";

const inputName = document.querySelector("#inputName");
const inputBorn = document.querySelector("#inputBorn");
const inputDate = document.querySelector("#inputDate");
const inputWage = document.querySelector("#inputWage");
const addButton = document.querySelector("#addButton");

const count = document.querySelector("#count");
const sum = document.querySelector("#sum");

const table = document.querySelector("#table");

const btnDelete = document.querySelector("#btnDelete");
const btnSum = document.querySelector("#btnSum");

const allEmployees = [];

const createEmployees = (name, born, date, wage) => {
  return {
    checked: false,
    name: name,
    born: born,
    date: date,
    wage: wage,
  };
};

const renderTable = () => {
  table.querySelector("tbody").innerHTML = "";
  allEmployees.forEach((employee, index) => {
    table.querySelector("tbody").innerHTML += `
      <tr>
        <td><input type="checkbox" class="select-check" id="${index}"></td>
        <td>${employee.name}</td>
        <td>${employee.born}</td>
        <td>${employee.date}</td>
        <td>${employee.wage}</td>
      </tr>
    `;
  });
};

const showNumberOfEmployees = () => {
  count.innerText = `NUMBER OF EMPLOYEES: ${allEmployees.length}`;
};

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  allEmployees.push(
    createEmployees(
      inputName.value,
      inputBorn.value,
      inputDate.value,
      inputWage.value
    )
  );
  renderTable();
  showNumberOfEmployees();
  inputName.value = "";
  inputBorn.value = "";
  inputDate.value = "";
  inputWage.value = "";
});
