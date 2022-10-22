import {getSecret} from 'wix-secrets-backend';

export function test(){
    const cohere = require("cohere-ai");
	console.log("ONE")
	cohere.init(getSecret("cohere_API_Key"));
	console.log("TWO")
	
	const response = cohere.generate({ prompt: 'Once upon a time in a magical land called' });

    return(getSecret("cohere_API_Key"));
}

export function multiply(factor1, factor2) {
   return factor1 * factor2;
}