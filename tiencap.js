// dom
function dom(id) {
  return document.getElementById(id);
}

// disabled
function disable() {
  let loai = dom("loai").value;
  if (loai === "nhaDan") {
    dom("ketNoi").disabled = true;
    dom("ketNoi").placeholder = "Không cần điền";
  } else {
    dom("ketNoi").disabled = false;
  }
}

// method
function thue(xuLi, dichVu, caoCap) {
  let loai = dom("loai").value;
  let numb = Number(dom("numb").value);
  let ketNoi = Number(dom("ketNoi").value);
  let tongTien = 0;

  if (loai === "nhaDan") {
    tongTien += xuLi + dichVu + caoCap * numb;
    return tongTien;
  } else if (loai === "doanhNghiep" && numb <= 10) {
    tongTien += xuLi + dichVu + caoCap * numb;
    return tongTien;
  } else loai === "doanhNghiep" && numb > 10;
  tongTien += xuLi + dichVu + (ketNoi - 10) * 5 + caoCap * numb;
  return tongTien;
}

dom("btn").onclick = function tinhTien() {
  let loai = dom("loai").value;
  let code = dom("code").value;
  let tong = 0;

  if (loai === "nhaDan") {
    tong = thue(4.5, 20.5, 7.5);
  } else {
    tong = thue(15, 75, 50);
  }
  dom("kq").innerHTML = "Mã khách hàng: " + code + " - Tiền cáp: " + tong + "$";
};
