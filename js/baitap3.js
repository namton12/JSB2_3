function quyDoiTien() {
    var tien =document.getElementById("inputTien").value;
    var tienViet =23.500;
    var tongTien =0;
     tongTien = tien* tienViet;
    document.getElementById("price1").innerHTML="Tong Tien:" + tongTien.toFixed(3) + "VND";
}