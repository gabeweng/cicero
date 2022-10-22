import { chGenerate } from 'backend/myScript';
 
 
$w.onReady(function () {
	console.log("READY")
});
 

$w('#button1').onClick(function (){
	console.log("clicked")
	var prompt = `Passage: Is Wordle getting tougher to solve? Players seem to be convinced that the 
game has gotten harder in recent weeks ever since The New York Times bought it from 
developer Josh Wardle in late January. The Times has come forward and shared that 
this likely isn’t the case. That said, the NYT did mess with the back end code a bit, 
removing some offensive and sexual language, as well as some obscure words There is 
a viral thread claiming that a confirmation bias was at play. One Twitter user went so far 
as to claim the game has gone to “the dusty section of the dictionary” to find its latest 
words.\n\nTLDR: Wordle has not gotten more difficult to solve.\n--\nPassage: 
ArtificialIvan, a seven-year-old, London-based payment and expense management 
software company, has raised $190 million in Series C funding led by ARG Global, with 
participation from D9 Capital Group and Boulder Capital. Earlier backers also joined the 
round, including Hilton Group, Roxanne Capital, Paved Roads Ventures, Brook 
Partners, and Plato Capital.\n\nTLDR: ArtificialIvan has raised $190 million in Series C 
funding.\n--\nPassage: `
	prompt+= $w("#textBox1").value
	prompt+="\n\nTLDR: "
	chGenerate(prompt).then(function(product) {		
		$w('#text19').text = "Summary:\n"+product.body.generations[0].text.slice(0,-1)
	});
})
