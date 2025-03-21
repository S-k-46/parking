let name = document.getElementById("name");
let bike = document.getElementById("bike");
let ins = document.getElementById("checkin");
let out = document.getElementById("checkout");

// console.log(name.value);

function fun1() {
  let child2 = document.getElementById("child2");
  child2.style.display = "block";
  // let table=document.getElementById("table");
  // let thead=document.getElementById("thead");

  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (i = 1; i <= 5; i++) {
    if (i == 1) {
      let td1 = document.createElement("td");
      tr.appendChild(td1);
      td1.textContent = i;
    } else if (i == 2) {
      let td2 = document.createElement("td");
      tr.appendChild(td2);
      td2.textContent = name.value;
    } else if (i == 3) {
      let td3 = document.createElement("td");
      tr.appendChild(td3);
      td3.textContent = bike.value;
    } else if (i == 4) {
      let td4 = document.createElement("td");
      tr.appendChild(td4);
      td4.textContent = ins.value;
    } else {
      let td5 = document.createElement("td");
      tr.appendChild(td5);
      td5.textContent = out.value;
    }
  }
  name.value=" ";
  bike.value=" ";
  ins.value=" ";
  out.value=" ";
}
//let form = document.getElementById("child1");

let btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  () => {
    fun1();
    // let inputs = document.querySelectorAll("input");
    // inputs.forEach((input) => (input.value = ""));
  },
  false
);