/**
 * khối 1:num1,num2,num3
 * 
 * khối 2:
 * nếu num1,num2,num3 % 2 == 0 => có 3 số chắn  
 * 
 * nếu num1,num2 % 2 == 0 && num3 % 2 != 0 => có 2 chẵn 1 lẻ
 * 
 * nếu num1,num3 % 2 == 0 && num2 % 2 != 0 => có 2 chẵn 1 lẻ
 * 
 * nếu num3,num2 % 2 == 0 && num1 % 2 != 0 => có 2 chẵn 1 lẻ
 * 
 * nếu num3,num2 % 2 != 0 && num1 % 2 == 0 => có 2 lẻ 1 chẵn
 * 
 * nếu num1,num2 % 2 != 0 && num3 % 2 == 0 => có 2 lẻ 1 chẵn
 * 
 * nếu num3,num1 % 2 != 0 && num2 % 2 == 0 => có 2 lẻ 1 chẵn
 * 
 *ngược lại num1,num2,num3 % 2 != 0 => có 3 số lẻ
 * 
 * 
 * khối 3:có mấy số chẵn có mấy số lẻ
 */
function chanLe() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (Number(num1) % 2 == 0 && Number(num2) % 2 == 0   && Number(num3) % 2 == 0) {
        document.getElementById("txtChanLe").innerHTML = "có 3 số chẵn là : " + num1 +", " + num2 + ", " + num3;
        document.getElementById("txtLeChan").innerHTML = "";
    }else if (Number(num1) % 2 == 0 && Number(num2) % 2 == 0   && Number(num3) % 2 != 0) {
        document.getElementById("txtChanLe").innerHTML = "có 2 số chẵn là : " + num1 + ", " + num2;
        document.getElementById("txtLeChan").innerHTML = "có 1 số lẻ là : " + num3;
    }else if (Number(num1) % 2 == 0 && Number(num2) % 2 != 0   && Number(num3) % 2 == 0){
        document.getElementById("txtChanLe").innerHTML = "có 2 số chẵn là : " + num1 + ", " + num3;
        document.getElementById("txtLeChan").innerHTML = "có 1 số lẻ là : " + num2;
    }else if (Number(num1) % 2 != 0 && Number(num2) % 2 == 0   && Number(num3) % 2 == 0){
        document.getElementById("txtChanLe").innerHTML = "có 2 số chẵn là : " + num2 + ", " + num3;
        document.getElementById("txtLeChan").innerHTML = "có 1 số lẻ là : " + num1;
    }else if (Number(num1) % 2 != 0 && Number(num2) % 2 != 0   && Number(num3) % 2 == 0){
        document.getElementById("txtChanLe").innerHTML = "có 1 số chẵn là : "+ num3;
        document.getElementById("txtLeChan").innerHTML = "có 2 số lẻ là : " + num1  +  ", " + num2 ;
    }else if (Number(num1) % 2 != 0 && Number(num2) % 2 == 0   && Number(num3) % 2 != 0){
        document.getElementById("txtChanLe").innerHTML = "có 1 số chẵn là : "+ num2;
        document.getElementById("txtLeChan").innerHTML = "có 2 số lẻ là : " + num1  +  ", " + num3 ;
    }else if (Number(num1) % 2 == 0 && Number(num2) % 2 != 0   && Number(num3) % 2 != 0){
        document.getElementById("txtChanLe").innerHTML = "có 1 số chẵn là : "+ num1;
        document.getElementById("txtLeChan").innerHTML = "có 2 số lẻ là : " + num3  +  ", " + num2 ;
    }else{
        document.getElementById("txtChanLe").innerHTML = "có 3 số lẻ là : " + num1 + ", " + num2 + ", " + num3;
        document.getElementById("txtLeChan").innerHTML = "";
    }

}

