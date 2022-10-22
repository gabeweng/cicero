import { chGenerate } from 'backend/myScript';
 
 
$w.onReady(function () {
	console.log("READY")
});
 

$w('#button1').onClick(function (){
	console.log("clicked")
	var prompt = `This is a spell check generator that fixes typos in samples of text.\n\nSample: Teh quick 
brwon fox jmps over the layz dog.\nFixed Text: The quick brown fox jumps over the lazy 
dog.\n--\nSample: How is oyur day, borther?\nFixed Text:  How is your day, 
brother?\n--\nSample: Whiile I was slepping, my eyes were oen.\nFixed Text: While I 
was sleeping, my eyes were open.\n--\nSample: Helo, I am a humman.\nFixed Text: 
Hello, I am a human.\n--\nSample:  I lovve the wrorld.\nFixed Text:  I love the 
world.\n--\nSample: `
	prompt+= $w("#textBox1").value
	prompt+="\nFixed Text: "
	chGenerate(prompt).then(function(product) {		
		$w('#text19').text = "Summary:\n"+product.body.generations[0].text.slice(0,-1)
	});
})
