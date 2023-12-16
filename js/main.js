
// bài 1 

function tinhLuong() {

    let soNgayLam = document.getElementById("so-Ngay-Lam-B1").value * 1;

    let ketQua = 100000 * (soNgayLam);
    document.getElementById("ket-Qua-B1").innerText = "Lương của bạn là: " + new Intl.NumberFormat('ja-JP').format(ketQua) + " vnđ";

}


// bài 2
function tinhTrungBinh() {

    let soThuNhat = document.getElementById("so-thu-nhat-B2").value * 1;
    let soThuHai = document.getElementById("so-thu-hai-B2").value * 1;
    let soThuBa = document.getElementById("so-thu-ba-B2").value * 1;
    let soThuBon = document.getElementById("so-thu-bon-B2").value * 1;
    let soThuNam = document.getElementById("so-thu-nam-B2").value * 1;

    let ketQua = (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam) / 5;
    document.getElementById("ket-Qua-B2").innerText = "Giá trị trung bình của bạn là: " + ketQua;

}

// bài 3
function quyDoiTien() {

    let soTien = document.getElementById("so-tien-B3").value * 1;

    let ketQua = 23500 * (soTien);
    document.getElementById("ket-Qua-B3").innerText = "Số Tiền của bạn là: " + new Intl.NumberFormat('ja-JP').format(ketQua) + " vnđ";


}

// bài 4
function tinh() {

    let chieuDai = document.getElementById("chieu-dai-B4").value * 1;
    let chieuRong = document.getElementById("chieu-rong-B4").value * 1;
    let dienTich = chieuDai * chieuRong;
    let chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById("ket-Qua-B4").innerText = "Diện tích là: " + new Intl.NumberFormat('ja-JP').format(dienTich) + "; " +"Chu vi là: " + new Intl.NumberFormat('ja-JP').format(chuVi) ;


}

// bài 5
function tinhTong() {

    let so = document.getElementById("so-B5").value * 1;
    let hangChuc= Math.floor(so/10);
    let hangDonVi= so%10;
    let ketQua = hangChuc+hangDonVi;

    document.getElementById("ket-Qua-B5").innerHTML ="Tổng hai ký số là: " + ketQua;


}
