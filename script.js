function firstNonRepeatedChar(str) {
	//for that i will first 
	for (let i=0; i<str.length ; i++)
		{
			let repeated=false;
			for(let j=0; j<str.length ; j++)
				{
					if(i!=j && str[i]===str[j])
					{ 
					     repeated=true;
						break;
					}
                }
			if(!repeated)
			{
				return str[i];
			}
        } return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
