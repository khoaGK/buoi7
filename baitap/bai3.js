
const nhapSinhVien = () => {
    let hoTen = "Nguyen Van A";
    let tuoi = 20;
    let diaChi = "Ha Noi";
    let sdt = "0123456789";

    return { hoTen, tuoi, diaChi, sdt };
};

const xayDungChuoi = (sinhVien) =>
    `Tên: ${sinhVien.hoTen}, Tuổi: ${sinhVien.tuoi}, Địa chỉ: ${sinhVien.diaChi}, SĐT: ${sinhVien.sdt}`;

const inDanhSachSv = (dssinhVien) => {
    console.log("\nDanh sách sinh viên:");
    dssinhVien.forEach((sv, i) => console.log(`${i + 1}. ${xayDungChuoi(sv)}`));
};

const xepDanhSachSv = (dssinhVien) =>
    dssinhVien.sort((a, b) => a.hoTen.localeCompare(b.hoTen));

const timSinhVienTheoSDT = (dssinhVien, sdt) => {
    let sv = dssinhVien.find(s => s.sdt === sdt);
    return sv ? xayDungChuoi(sv) : "Không tìm thấy sinh viên";
};

const locSinhVienTheoTuoi = (dssinhVien, tuoiCanTim) => {
    return dssinhVien.filter(s => s.tuoi === tuoiCanTim);
};


let danhSach = [];

danhSach.push(nhapSinhVien());
danhSach.push({ hoTen: "Le Thi B", tuoi: 21, diaChi: "Da Nang", sdt: "0988888888" });
danhSach.push({ hoTen: "Tran Van C", tuoi: 20, diaChi: "HCM", sdt: "0777777777" });

console.log("\n=== DANH SÁCH BAN ĐẦU ===");
inDanhSachSv(danhSach);

console.log("\n=== DANH SÁCH SAU KHI SẮP XẾP ===");
xepDanhSachSv(danhSach);
inDanhSachSv(danhSach);

console.log("\n=== TÌM KIẾM THEO SĐT ===");
console.log(timSinhVienTheoSDT(danhSach, "0988888888"));

console.log("\n=== LỌC THEO TUỔI 20 ===");
console.log(locSinhVienTheoTuoi(danhSach, 20));
