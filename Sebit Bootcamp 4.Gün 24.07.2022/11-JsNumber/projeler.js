let yaricap = 15;
const piSayisi = 3.14;
let daireAlani = piSayisi * yaricap **2;
console.log(daireAlani);

let kalan = yaricap % 4;
console.log(kalan);

let sonuc = 6 * (15 -4)**2;
console.log(sonuc);

//Sayı Arttırma
/*let sayi = 13;
//sayi = sayi + 1;
//sayi++; */

// ++ sayi sayi++ farkı
let sayi = 13;
let sayim = sayi++;
console.log("Sayin : " ,sayim);
let yeniSayi = ++sayi;
console.log("Sayin : ", yeniSayi);

//NaN Kullanımı
console.log(15/4);
console.log(15/"Hasan");
console.log(15 * "Hasan");

let birlestirme = "Dersi " + sayi + " kere tekrar ettim";
console.log(birlestirme);