/*console.log("Merhaba") 
console.log('Merhaba') */

/* var
   let   Javascript tanım
   const */

   let gun = 10;
   let ay = 2;
   let yil = 1996;
   gun = 20; // Değiştirilirse console.log'a son değeri yazdırır.
   console.log(gun,ay,yil);
   console.log("Hasan Yılmaz " + gun  + "/" + ay + "/" + yil + " tarihinde doğmuştur");
   
   const secondhandCar = 200000;
   // secondhandCar = 150000; Güncelleme yapılırsa konsolda Uncaught TypeError hatası verir.
   console.log(secondhandCar);
   
   var a = 10;
   var a = 2;
   console.log(a); //a'daki en son değeri verir.
   
   var c=5;
   console.log("C Değeri Dışarda: ",c);
   {
       var c=3;
       console.log("C Değeri İçerde : ",c);
   }
   console.log("C Değeri Dışarda : ",c);
   
   let d=5;
   console.log("D Değeri Dışarda: ",d);
   {
       let d=3;
       console.log("D Değeri İçerde : ",d);
   }
   console.log("D Değeri Dışarda : ",d);