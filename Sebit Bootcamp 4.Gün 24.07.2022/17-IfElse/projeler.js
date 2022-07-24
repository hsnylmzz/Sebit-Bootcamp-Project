const newPassword = "adadsdas321";
if(newPassword.length > 12)
{
    console.log("Şifre Güçlü")
}
else if(newPassword.length >= 8 && newPassword.length <= 12)
{
   console.log("Şifre Yeterli");
}
else
{
   console.log("Şifreyi Yeniden Giriniz");
}