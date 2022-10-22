import { test } from 'backend/myScript';
import { chGenerate } from 'backend/myScript';
 
 
var chat = Array()
$w.onReady(function () {
    chat.push(" Hi! How are you?")
});
 
 
$w('#button1').onClick(function (){
 console.log("clicked")
 chat.push($w('#textBox1').value)
 var prompt=""
 for (var i = Math.max(0,chat.length-3); i < chat.length; i++) {
     if (i%2==0){
         prompt+="Therapist:"
     }
     else{
         prompt+="Student:"
     }
     prompt+=chat[i] +"\n"
 }
 prompt+= "\nTherapist:"
 chGenerate(prompt).then(function(product) {
     chat.push(product)
     // console.log(product.body.generations[0].text);
     // Logs: 20
 });
 var display=""
 for (var j = 0; j < chat.length; j++) {
    if (j%2==0){
        display+="Therapist:"
    }
    else{
        display+="Student:"
    }
	display+=chat[i] +"\n"
}
$w('#text19').text = display
})
