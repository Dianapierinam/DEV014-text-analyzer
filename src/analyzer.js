const analyzer = {  
  getWordCount: (text) => {
    //Se la condicional if que indica si el texto está vacío retorna cero, trim es para eliminar espacios en blanco.
    if (text.trim() === '') {
      return 0;
    }
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
   
    //Split para dividir las palabras y lenght para contar el número de palabras.
    //Esto se almacena en la constante solucion y luego retorna en solucion.
    const solucion = text.split(' ').length
    return solucion;

  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //Length cuenta todo lo que se encuentra en text incluyendo espacios, signos, letras y numeros.
    const solucion = text.length
    return solucion;

  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // La const signos alberga todos los singos de puntuación 
    const signos = "[].,/#!$%^&*;:{@}=-_`~()+<>";
    //Inicia desde su valor cero, no cuenta espacios ni signos.
    let contar = 0;
    
    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      //  si no es un espacio o signos almacenados en la cosnt signos, contar++.
      if (caracter !== ' ' && !signos.includes(caracter)) {
        contar++;
      
      }
    }
    return contar;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Split para dividir las palabras del text
    const words = text.split(' ');
    //se comienza en cero si no hay letras
    let longitud =  0 ;
    //Con words.forEach se indica que se realizará un acción con cada palabra 
    //Se suma la cantidad de letras en words.length
    words.forEach(word => {
      longitud += word.length
    });
    //londitud media es igual a la suma de longitudes de las palabras entre el numero de palabras
    const longitudMedia = longitud /words.length; 
    
    return parseFloat(longitudMedia.toFixed(2));
  },
  getNumberCount: (text) => {

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    const arregloPalabras = text.trim().split(" ");
    //console.log (arregloPalabras)
    let contadorNumeros = 0
    
    for (let i = 0; i < arregloPalabras.length; i++) {
      
      if (isNaN(arregloPalabras [i])) {
        contadorNumeros = contadorNumeros + 0
      } else {
        contadorNumeros = contadorNumeros + 1
      }
      
      const ultimoCaracter = arregloPalabras[i].length -1
      if(arregloPalabras[i].slice(-1) === '.'){
        const nuevoElemento = arregloPalabras[i].slice(0,ultimoCaracter)
        
        if (!isNaN(nuevoElemento)) 
        {
          contadorNumeros++
        }
      }
    }
    //console.log ('resultado final', contadorNumeros)
    return contadorNumeros;
    
  },
  
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      return 0;
    }
    const arregloPalabras = text.trim().split(" ");
    let sumaNumeros = 0; // Variable para almacenar la suma de los números
  
    for (let i = 0; i < arregloPalabras.length; i++) {
      
      if (isNaN(arregloPalabras [i])) {
        sumaNumeros = sumaNumeros + 0
      } else {
        sumaNumeros = sumaNumeros +  parseFloat(arregloPalabras[i])
      }
      
      const ultimoCaracter = arregloPalabras[i].length -1
      if(arregloPalabras[i].slice(-1) === '.'){
        const nuevoElemento = arregloPalabras[i].slice(0,ultimoCaracter)
        
        if (!isNaN(nuevoElemento)) 
        {
          sumaNumeros = sumaNumeros + parseFloat(arregloPalabras[i])
        }
      }
    }
  
    return sumaNumeros.toFixed(2);
  },
  

  getCleartext: (text) => {
    text.value = "";
  },

};



export default analyzer;
