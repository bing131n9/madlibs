function generateMadlib() {
  
  // This is the starting story
  var story = "During your winter break, you sat on someone's BODY_PART and mistook them for SUPERHERO. After apologizing NUMBER times, Santa appeared out of nowhere ";
  

  var inputValue = document.getElementById("body part").value;
  story = story.replace("BODY_PART", inputValue);
  
  inputValue = document.getElementById("superhero").value;
  story = story.replace("SUPERHERO", inputValue);
  
  inputValue = 
   document.getElementById("number").value;
  story = story.replace("NUMBER", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}