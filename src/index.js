function displayPoem (response){
      new Typewriter ("#poem", {
      strings: response.data.answer,

      autoStart: true,
      delay: 1,
      cursor: "",
    });
    }
    
    function generatePoem(event) {
      event.preventDefault();
      
    let promptInput=document.querySelector ("#user-prompt");
    
    let apiKey="9b1eb7f6b0dta3ca34a6405747e885o1";
    let context= "You are a romantic poem expert and love to write short poem. Your mission is to generate a 4 line poem in basic html format without including the html tag, make sure to follow the user prompt. Sign the poem with 'RubyGem' inside <strong> element at the end of the poem";
    let prompt=`User prompt: Generate a poem ${promptInput.value}`;
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then( displayPoem);
    }
      let poemFormElement=document.querySelector ("#poem-generator-form");
      poemFormElement.addEventListener("submit", generatePoem);