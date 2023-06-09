document.getElementById("btn").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value;
  let diemKV = document.getElementById("khuVuc").value;
  let diemDT = document.getElementById("doiTuong").value;
  let mon1 = +document.getElementById("mon1").value;
  let mon2 = +document.getElementById("mon2").value;
  let mon3 = +document.getElementById("mon3").value;
  let trungBinh = 0;

  if (diemKV === "X" && diemDT === "0") {
    trungBinh = tinhDiem(0, 0, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "X" && diemDT === "1") {
    trungBinh = tinhDiem(0, 2.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "X" && diemDT === "2") {
    trungBinh = tinhDiem(0, 1.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "X" && diemDT === "3") {
    trungBinh = tinhDiem(0, 1, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "A" && diemDT === "0") {
    trungBinh = tinhDiem(2, 0, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "A" && diemDT === "1") {
    trungBinh = tinhDiem(2, 2.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "A" && diemDT === "2") {
    trungBinh = tinhDiem(2, 1.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "A" && diemDT === "3") {
    trungBinh = tinhDiem(2, 1, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "B" && diemDT === "0") {
    trungBinh = tinhDiem(1, 0, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "B" && diemDT === "1") {
    trungBinh = tinhDiem(1, 2.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "B" && diemDT === "2") {
    trungBinh = tinhDiem(1, 1.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "B" && diemDT === "3") {
    trungBinh = tinhDiem(1, 1, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "C" && diemDT === "0") {
    trungBinh = tinhDiem(0.5, 0, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "C" && diemDT === "1") {
    trungBinh = tinhDiem(0.5, 2.5, mon1, mon2, mon3);
    display(trungBinh);
  } else if (diemKV === "C" && diemDT === "2") {
    trungBinh = tinhDiem(0.5, 1.5, mon1, mon2, mon3);
    display(trungBinh);
  } else diemKV === "C" && diemDT === "3";
  trungBinh = tinhDiem(0.5, 1, mon1, mon2, mon3);
  display(trungBinh);
};

function tinhDiem(diemKV, diemDT, diem1, diem2, diem3) {
  let diemTB = 0;
  diemTB = diemKV + diemDT + diem1 + diem2 + diem3;
  return diemTB;
}

function display(trungBinh) {
  if (trungBinh >= diemChuan) {
    document.getElementById("kq").style.color = "green";
    document.getElementById("kq").innerHTML =
      "Bạn đã đạt. Điểm trung bình của bạn là: " + trungBinh;
  } else {
    document.getElementById("kq").style.color = "red";
    document.getElementById("kq").innerHTML =
      "Bạn đã rớt. Điểm trung bình của bạn là: " + trungBinh;
  }
}
