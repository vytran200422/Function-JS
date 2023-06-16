function dom(id) {
  return document.getElementById(id);
}

// method function
function method(per) {
  let income = Number(dom("income").value);
  let ppl = Number(dom("ppl").value);
  let incomeTax = 0;

  incomeTax = (income - 4e6 - ppl * 16e5) * per;
  return incomeTax;
}

dom("btn").onclick = function () {
  let income = Number(dom("income").value);
  let name = dom("name").value;
  let tax = 0;
  if (income < 60e6) {
    tax = method(0.05);
  } else if (income <= 120e6) {
    tax = method(0.1);
  } else if (income <= 210e6) {
    tax = method(0.15);
  } else if (income <= 384e6) {
    tax = method(0.2);
  } else if (income <= 624e6) {
    tax = method(0.25);
  } else if (income <= 960e6) {
    tax = method(0.3);
  } else {
    tax = method(0.35);
  }
  dom("kq").innerHTML =
    "Họ tên: " +
    name +
    " - Thuế thu nhập cá nhân: " +
    tax.toLocaleString() +
    "vnd";
};
