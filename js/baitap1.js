function tinhTienLuong() {
    var inputTienLuong = document.getElementById("inputprice").value;
    var inputNgayLam = document.getElementById("inputnumber").value;
    var tienLuong=0;
    tienLuong = inputTienLuong * inputNgayLam;
    document.getElementById("result").innerHTML=tienLuong.toLocaleString()+"VND";
}
