function chuViDienTich() {
    var chieudai = document.getElementById("inputchieudai").value;
    var chieurong = document.getElementById("inputchieurong").value;
    var chuvi = 0;
    var dientich = 0;
    chuvi = (parseInt(chieudai)+parseInt(chieurong)) *2;
    dientich = chieudai * chieurong;
    document.getElementById("content").innerHTML="Chu Vi: "+ chuvi+ "<br>Diện Tích: "+dientich;
    
}