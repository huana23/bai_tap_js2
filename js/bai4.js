/**
 * khố 1:canhA, canhB, canhC
 * 
 * khối 2:
 * nếu (canhA + canhB <= canhC || canhA + canhC <= canhB ||  canhB + canhC <= canhA) => tam giác không hợp lệ
 * 
 * ngược lại => đây là tam giác
 *          nếu ((canhA == canhB) && (canhB == canhC)) => tam giác đều
 *          ngược lại 
 *              nếu (canhA * canhA + canhB * canhB == canhC * canhC || canhA * canhC + canhC * canhC == canhB * canhB || canhB * canhB + canhC * canhC == canhA * canhC) => tam giác vuông
 *              nếu (canhA == canhB || canhA == canhC || canhB == canhC) => tam giác cân
 *          
 * 
 * khối 3: đó là tam giác gì
 */

function tamGiac() {
    var a = document.getElementById("canhA").value;
    var b = document.getElementById("canhB").value;
    var c = document.getElementById("canhC").value;

    if (Number(a) + Number(b) <= Number(c) || Number(a) + Number(c) <= Number(b) ||  Number(b) + Number(c) <= Number(a)) {
        document.getElementById("txtDTamGiac").innerHTML = "tam giác không hợp lệ";
    }else {
        document.getElementById("txtDTamGiac").innerHTML = "đây là một tam giác thường";
        if ((a == b) && (b == c)) {
            document.getElementById("txtDTamGiac").innerHTML = "tam giác đều";
        }else {
            if ((a*a == (b*b)+(c*c)) || (b*b == (c*c)+(a*a)) || (c*c == (b*b)+(a*a))) {
                document.getElementById("txtDTamGiac").innerHTML = "tam giác vuông";
            }if (a == b || a == c || b == c) {
                document.getElementById("txtDTamGiac").innerHTML = "tam giác cân";
                
            }
        }

    }

}