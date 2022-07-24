function hello()
{
   console.log("Hello");
}
hello();
hello();
hello();

//Fonksiyonlara Parametre gönderme

const isimyazdir = function(ad = "Hakan",soyad = "Aksoy"){
   console.log(`Ad Soyad : ${ad} ${soyad}`);
}
isimyazdir("Hasan","Yılmaz");
isimyazdir(); //Default parametre

//Eski Tipten Error'a hafif geçiş
const square_area = function(kenar)
{
   return kenar**2;
}
let sonuc = square_area(6);
console.log(sonuc);

//Error İlk Versiyon
/*const kare_alani = (kenar) => {
   return kenar**2;
} */

//Tek Parametre
/*const kare_alani = kenar => {
   return kenar**2;
}*/

const kare_alani = kenar => kenar**2;
console.log(kare_alani(6));

/*const donus = () => {
   return "Hasan";
} */

const stringDonus = () => "Hasan";
console.log(stringDonus());

// Ürün Satış Fonksiyonu
const urunSatis = function(urunler,vergi)
{
     let toplam = 0;
     for(let i= 0; i<urunler.length; i++)
     {
       toplam = toplam + urunler[i] + urunler[i] * vergi;
     }
     return toplam;
}
console.log(urunSatis([10,20,30],0.25));

// Error Function Hali
const urunSatisArrow = (urunler,vergi) => {
     let toplam = 0;
     for(let i= 0; i<urunler.length; i++)
     {
       toplam = toplam + urunler[i] + urunler[i] * vergi;
     }
     return toplam;
}
console.log(urunSatisArrow([10,20,30],0.25));


