function SearchingChallenge(str) { 

    const numberOfUniqueCharacters = parseInt(str.substring(0,1), 10);
    const stringToInspect = str.substring(1, str.length);
    let arrayOfCharacters =  stringToInspect.split('');
    let subArrayOfCharacters = arrayOfCharacters.map(element => element);

    let arrayUniqueStrings = [];
    let charactersToInspect  = '';
    let char = '';
    let index = 0;
    
    //Get unique strings
    for(let characterToInspect of  arrayOfCharacters ){
      charactersToInspect += characterToInspect;
  
      for(let character of subArrayOfCharacters){
      
       char = character;

       if(!charactersToInspect.includes(char) && charactersToInspect.length < numberOfUniqueCharacters){
        charactersToInspect += char;
       }
  
       const isMaxCharactersToInspectCompleted = charactersToInspect.length >= numberOfUniqueCharacters;
       const stringEnds = index === subArrayOfCharacters.length - 1;

        if(!charactersToInspect.includes(char) && isMaxCharactersToInspectCompleted) {
         const uniqueString = (subArrayOfCharacters.join('')).substring(0, index + 1);
         const uniqueStringArray = uniqueString.split('').map(character => {
            const isAValidCharacter = charactersToInspect.includes(character);
           if(isAValidCharacter){ return character }
         })   
         uniqueStringCleaned = uniqueStringArray.join('');
         arrayUniqueStrings.push(uniqueStringCleaned);
        break; 
        }
        
        if(stringEnds){
        const uniqueString = (subArrayOfCharacters.join('')).substring(0, index + 1);
        const uniqueStringArray = uniqueString.split('').map(character => {
            const isAValidCharacter = charactersToInspect.includes(character);
           if(isAValidCharacter){ return character }
         })   
         uniqueStringCleaned = uniqueStringArray.join('');
         arrayUniqueStrings.push(uniqueStringCleaned);
        break; 
        }

       index +=1;
    }
    
    subArrayOfCharacters.shift();
    charactersToInspect = '';
    index = 0;
    }


    //Get longest string
    let longestString = '';
    arrayUniqueStrings.forEach(string => longestString = string.length > longestString.length ? string : longestString)

    console.log(longestString);
  
    return str; 
  }
     
  // keep this function call here 
  console.log(SearchingChallenge('2aabbcbbbadef'));