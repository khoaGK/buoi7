
function tinhLaiKepVonGoc(soTien, laiSuat, soNam) {
    return soTien * Math.pow(1 + laiSuat, soNam);
}

console.log("\nBài 2:");
console.log("Số tiền sau 3 năm:", tinhLaiKepVonGoc(1000000, 0.1, 3));
