function tinhTong() {
    var num = document.getElementById("inputTong").value;
    var num1 =0;
    var num2 =0;
    var sum =0;
    num1 = Math.floor(num/10);
num2 = num % 10;
sum = num1 + num2;
document.getElementById("element").innerHTML="Tổng của 2 kí số : "+sum;
}