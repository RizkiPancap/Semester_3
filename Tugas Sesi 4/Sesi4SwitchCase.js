let pendapatan = 1000000; // Dapat Di Rubah jumlah pendapatan sesuai kebutuhan

let uangJasa, komisi, totalKomisi;

switch(true) {
  case (pendapatan <= 200000):
    uangJasa = 100000;
    komisi = pendapatan * 0.1;
    totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapat : Rp. " + totalKomisi);
    break;
  case (pendapatan > 200000 && pendapatan <= 500000):
    uangJasa = 200000;
    komisi = pendapatan * 0.15;
    totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapat : Rp. " + totalKomisi);
    break;
  case (pendapatan > 500000):
    uangJasa = 300000;
    komisi = pendapatan * 0.2;
    totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapat : Rp. " + totalKomisi);
    break;
  default:
    console.log("Penpatan tidak valid");
}