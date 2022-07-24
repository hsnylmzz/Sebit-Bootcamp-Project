isimler = ["Hasan","Hakan","Onur"];
/*console.log(isimler);
console.log(isimler[0]);
isimler[2] = "Alperen";
console.log(isimler); */

let yaslar = [26,25,24,28];
console.log(yaslar[3]);

let random = ["Hasan","Yılmaz",10,15];
console.log(random);

//Dizinin Eleman Sayısı
console.log(random.length);

let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(", ");
console.log(virgullu);

let sira = isimler.indexOf("Onur");
console.log(sira);

//Concat Metodu
let eklenmis_dizi = isimler.concat(["Alperen","Batuhan"]);
console.log(eklenmis_dizi);
console.log(isimler);  // Ana dizin değişmez.

isimler.push("Araz");
console.log(isimler);

isimler.pop();
console.log(isimler);