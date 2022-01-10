// xuất 3 số nguyên theo thứ tự tăng dần
/**
 * khối 1: so1, so2, so3
 * 
 * khối 2:
 * b1: khai báo và tạo các biến
 * b2: kiểm tra điều kiện
 * nếu so1 > so2 && so1 > so3 && so2 > so3
 *          in so1 > so2 > so3
 * nếu so1 > so2 && so1 > so3 && so3> so2
 *          in so1 > so3 > so2
 * nếu so2 > so1 && so2 > so3 && so1> so3
 *          in so2 > so1 > so3
 * nếu so2 > so1 && so2 > so3 && so3> so1
 *          in so2 > so3 > so1
 * nếu so3 > so1 && so3 > so2 && so1> so2
 *          in so3 > so1 > so2
 * nếu so3 > so1 && so3 > so2 && so2> so1
 *          in so3 > so2 > so1
 * b3: hiển thị kết quả
 * 
 * 
 * khối 3: thuTu
 * 
 */

function sapXep() {
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;


    if (Number(so1) <= Number(so2) && Number(so1) <=  Number(so3) && Number(so2) <=  Number(so3)) {
        document.getElementById("txtDTangDan").innerHTML = Number(so1)  + " <= " + Number(so2) + " <= " + Number(so3);
    }else if (Number(so1) <= Number(so2) && Number(so1) <=  Number(so3) &&  Number(so3) <= Number(so2)) {
        document.getElementById("txtDTangDan").innerHTML = Number(so1) + " <= " + Number(so3) + " <= " + Number(so2);
    }else if (Number(so2) <= Number(so1) && Number(so2) <=  Number(so3) && Number(so1) <=  Number(so3)) {
        document.getElementById("txtDTangDan").innerHTML = Number(so2) + " <= " + Number(so1) + " <= " + Number(so3);
    }else if (Number(so2) <= Number(so1) && Number(so2) <=  Number(so3) &&  Number(so3) <= Number(so1)) {
        document.getElementById("txtDTangDan").innerHTML = Number(so2) + " <= " + Number(so3) + " <= " + Number(so1);
    }else if ( Number(so3) <= Number(so1) &&  Number(so3) <= Number(so2) && Number(so1) <= Number(so2)) {
        document.getElementById("txtDTangDan").innerHTML = Number(so3) + " <= " + Number(so1) + " <= " + Number(so2);
    }else {
        document.getElementById("txtDTangDan").innerHTML = Number(so3)+ " <= " + Number(so2) + " <= " + Number(so1);
    }

}