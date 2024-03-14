import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`*/


const textarea = document.querySelector("textarea");
const recuento = document.querySelector("li[data-testid=word-count]");
const caracteres = document.querySelector("li[data-testid=character-count]");
const excluyendo = document.querySelector("li[data-testid=character-no-spaces-count]");
const numeros = document.querySelector("li[data-testid=number-count]");
const suma = document.querySelector("li[data-testid=number-sum]");
const longitud =document.querySelector("li[data-testid=word-length-average]");
const button =document.getElementById('reset-button');


button.addEventListener('click', function(){
  
  textarea.value = "";

  recuento.innerHTML = 'Recuento de palabras:';
  caracteres.innerHTML = 'Recuento de caracteres:';
  excluyendo.innerHTML = 'Recuento de caracteres excluyendo espacios y signos de puntuación:';
  longitud.innerHTML = 'Longitud media de palabras:';
  numeros.innerHTML = 'Recuento de números:';
  suma.innerHTML = 'Suma total de números:';

})

textarea.addEventListener('input', function () {
  //Recuento de Palabras
  const wordCount = analyzer.getWordCount(textarea.value);
  recuento.innerHTML = 'Recuento de Palabras: ' + wordCount;
  // Recuento de caracteres
  const CharacterCount = analyzer.getCharacterCount(textarea.value);
  caracteres.innerHTML = 'Recuento de caracteres:' + CharacterCount;
  // Recuento de caracteres sin Caracteres Especiales
  const CharacterExcluyentesCount = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  excluyendo.innerHTML = 'Recuento de caracteres excluyendo espacios y signos de puntuación:' + CharacterExcluyentesCount;
  //Retornar la longitud media de las palabras
  const WordLengthAverage =  analyzer.getAverageWordLength(textarea.value);
  longitud.innerHTML = 'Longitud media de palabras:' + WordLengthAverage;
  //Recuento de números
  //const NumberCount = analyzer.getNumberCount(textarea.value);
  numeros.innerHTML = 'Recuento de números:' + analyzer.getNumberCount(textarea.value);
  //Suma total de números
  const NumberSum = analyzer.getNumberSum(textarea.value);
  suma.innerHTML = 'Suma total de números:' + NumberSum;
    
})



