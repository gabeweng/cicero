import {getSecret} from 'wix-secrets-backend';

export function test(){
    const cohere = require("cohere-ai");

    return getSecret("cohere_API_Key").then(async function(product) {
        console.log("THE API KEY IS:")
		console.log(product)
        cohere.init(product);
        const response = await cohere.generate({ prompt: 'Once upon a time in a magical land called' });
        console.log("THE RESPONSE IS:")
        console.log(response)
        return(response);
	});
	
}

export function chGenerate(chat){
    const cohere = require("cohere-ai");
    return getSecret("cohere_API_Key").then(async function(product) {
		console.log(product)
        cohere.init(product);
        const response = await cohere.generate({ prompt: chat, stop_sequences: ["\n"]});
        console.log(response)
        return(response);
	});
	
}

