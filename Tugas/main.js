// console.log("JAWIR")
// console.log("Universitas Nusa Putra")
// console.log("Program Studi : Teknik Informatika")

// var fullname;
// fullname = "JAWIR"
// fullname = "Universitas Nusa Putra"
// fullname = "Program Studi : Teknik Informatika"

// console.log(fullname)

// Input Jumlah Pendapan harian
const PenjualanHarian = 600000; // Dapat di rubah jumlah pendapatan sesuai kebutuhan

// Deklarasikan Variabel Uang jasa dan komisi
let UangJasa = 0;
let komisi = 0;

// Menggunakan Switch case untuk menentukan komisi berdasarkan jumlah uang
switch (state) {
  case PenjualanHarian <= 200000:
    UangJasa = 10000;
    komisi = PenjualanHarian * 0.1;
    break;
  case PenjualanHarian <= 500000:
    UangJasa = 20000;
    komisi = PenjualanHarian * 0.15;
    break;
  default:
    UangJasa = 30000;
    komisi = PenjualanHarian * 0.2;
    break;
}

// Hitung total pendapatan salesman
const totalPendapatan = UangJasa + komisi;

// tampilkan Hasil
console.log(`Penjualan Harian : Rp. ${PenjualanHarian}`);
console.log(`Uang Jasa : Rp. ${UangJasa}`);
console.log(`Komisi : Rp. ${Komisi}`);
console.log(`Total Pendapatan : Rp. ${totalPendapatan}`);
