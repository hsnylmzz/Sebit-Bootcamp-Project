let email = "hsnylmz2861@gmail.com";
console.log(email);

//String Birleştirme
let ad = "Hasan";
let soyad = "Yılmaz XXXX";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[0]);

// Karakter Uzunluğu Bulma
console.log(adSoyad.length);

//String Metodları
console.log(adSoyad.toUpperCase());
console.log(adSoyad.toLowerCase()); // 1.Yöntem
let kucukAdSoyad = adSoyad.toLowerCase(); //2.Yöntem
console.log(kucukAdSoyad);

//Kaçıncı İndiste Bulunduğunu Gösterme
let index = adSoyad.indexOf('a');
console.log(index);
let indexLast = adSoyad.lastIndexOf('a');
console.log(indexLast);

//Slice Kullanımı
let ilkisim = adSoyad.slice(0,5);
console.log(ilkisim);

//Replace Kullanımı
let yerdegistir = adSoyad.replace(" ","");
console.log(yerdegistir);

//ReplaceAll
let yerdegistirAll = adSoyad.replaceAll(" ","");
console.log(yerdegistirAll);