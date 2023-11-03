let pendapatan = 400000; // Dapat Di Rubah jumlah pendapatan sesuai kebutuhan

if (pendapatan <= 200000) {
  let uangJasa = 10000;
  let komisi = pendapatan * 0.1;
  let totalKomisi = uangJasa + komisi;
  console.log("Total Komisi : " + formatRupiah(totalKomisi));
} else if (pendapatan > 200000 && pendapatan <= 500000) {
  let uangJasa = 20000;
  let komisi = pendapatan * 0.15;
  let totalKomisi = uangJasa + komisi;
  console.log("Total Komisi : " + formatRupiah(totalKomisi));
} else if (pendapatan > 500000) {
  let uangJasa = 30000;
  let komisi = pendapatan * 0.2;
  let totalKomisi = uangJasa + komisi;
  console.log("Total Komisi : " + formatRupiah(totalKomisi));
}
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return "Rp" + ribuan;
}