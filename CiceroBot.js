import { test } from 'backend/myScript';
$w.onReady(function () {
	
	test().then(function(product) {
		console.log(product);
		// console.log(product.body.generations[0].text);
		// Logs: 20
	});
	$w("#button1").label = "Click me!";


});