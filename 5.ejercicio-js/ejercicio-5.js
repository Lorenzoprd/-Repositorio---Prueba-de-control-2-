

const api_url = 'https://rickandmortyapi.com/api/episode';

const getCharacter = async (String) => {
    try {
        const contChars = [];
        const response = await fetch(api_url);
        const { results }= await response.json();
        const epi = Array.from(results).filter((episode) => 
            episode.air_date.includes(String)
        );
        const chars = epi[0].characters
            .concat(epi[1].characters)
            .concat(epi[2].characters)
       for (const char of chars) {
           const response = await fetch(`${char}`);
           const { name } = await response.json();
           contChars.push(name);
       }
       const charName = contChars.filter((value, index) => {
           return contChars.indexOf(value) === index;
       });
       console.log(charName);
       return charName;
        
    } catch(error){
        console.log('error');
    }     
};

console.log(getCharacter('January'));