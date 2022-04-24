function tinhTrungBinh() {
    var num1 = document.getElementById("inputnumber1").value;
    var num2 =document.getElementById("inputnumber2").value;
    var num3 = document.getElementById("inputnumber3").value;
    var num4 = document.getElementById("inputnumber4").value;
    var num5  = document.getElementById("inputnumber5").value;
    var num = 0 ;
    num =( parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5))/5
    document.getElementById("numberone").innerHTML="Điểm trung bình:"+num;
}