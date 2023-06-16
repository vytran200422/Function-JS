// Bai tap 2
document.getElementById("tienDien").onclick = function () {
  let ten = document.getElementById("ten").value;
  let soKw = +document.getElementById("KW").value;
  let tongTien = 0;
  if (soKw <= 50) {
    tongTien += 500 * soKw;
  } else if (soKw <= 100) {
    tongTien = 500 * 50 + 650 * (soKw - 50);
  } else if (soKw <= 200) {
    tongTien += 500 * 50 + 650 * (100 - 50) + 850 * (soKw - 100);
  } else if (soKw <= 350) {
    tongTien +=
      500 * 50 + 650 * (100 - 50) + 850 * (200 - 100) + 1100 * (soKw - 200);
  } else {
    tongTien +=
      500 * 50 +
      650 * (100 - 50) +
      850 * (200 - 100) +
      1100 * (350 - 200) +
      1300 * (soKw - 350);
  }
  document.getElementById("kq").innerHTML =
    "Tên: " + ten + " - " + "Số tiền: " + tongTien.toLocaleString() + "vnd";
};
