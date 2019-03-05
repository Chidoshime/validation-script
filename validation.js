 <script>
function passw(){
var txt = document.getElementById("text").value;
if (txt == 'test' || txt == 'promo') {
// 	swal({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success",
//   button: "Aww yiss!",
// });
$('.t-prefix_1').css('display', 'block'); // Делает див видимым(по умолчанию).
document.getElementById("text").style.display="none";
document.getElementById("buttonform").style.display="none";
document.getElementById("error").style.display="none";
document.getElementById("succes").style.display="block";

document.getElementById("rec90671125").style.display="block";
document.getElementById("rec91182509").style.display="none";
}
else { 
    document.getElementById("error").style.display="block";
// 	sweetAlert("Ой...", "Ты указал неверное кодовое слово", "error");
	}
}
</script>
