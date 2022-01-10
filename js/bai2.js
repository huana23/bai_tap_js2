/**
 * khối 1:
 * ten
 * 
 * 
 * khối 2:
 * b1: khai báo và tạo các biến
 * b2:
 * nếu B => xin chào ba
 * nếu M => xin chào mẹ
 * nếu A => xin chào anh trai
 * nếu E => xin chào em gái
 * b3: hiển thị kết quả
 * 
 * 
 * khối 3:
 * đưa ra tên người đang sử dụng máy
 */
function chaoHoi() {
    var ten = document.getElementById("tenNguoisd").value;

    if (ten == "B" || ten == "b") {
        document.getElementById("txtChaoHoi").innerHTML = "xin chào ba";
    }else if (ten == "M" || ten == "m") {
        document.getElementById("txtChaoHoi").innerHTML = "xin chào mẹ";
    }
    else if (ten == "A" || ten == "a") {
        document.getElementById("txtChaoHoi").innerHTML = "xin chào anh trai";
    }else if (ten == "E" || ten == "e") {
        document.getElementById("txtChaoHoi").innerHTML = "xin chào em gái";
    }else {
        document.getElementById("txtChaoHoi").innerHTML = "xin chào người lạ có tên là " + ten;
    }
}