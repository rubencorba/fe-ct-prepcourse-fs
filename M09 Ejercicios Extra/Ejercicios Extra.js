/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayNuevo= [];
   for (var i in objeto){
      arrayNuevo.push([i,objeto[i]]);
   }
   return arrayNuevo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrayDeString = string.split("").sort();
   let objetoDeDuplas={};
   for (let i=0;i<arrayDeString.length;i++){
      if (objetoDeDuplas[arrayDeString[i]]){
         objetoDeDuplas[arrayDeString[i]]+=1;
      }else{
         objetoDeDuplas[arrayDeString[i]]=1;
      }
   }
   
   return objetoDeDuplas;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayDoString= string.split("");
   var array2= [];
   for (let i=0;i<arrayDoString.length;i++){
      if (arrayDoString[i]==arrayDoString[i].toUpperCase()){
         array2.push(arrayDoString[i]);
      }
   }
   for (let i=0;i<arrayDoString.length;i++){
      if (arrayDoString[i]==arrayDoString[i].toLowerCase()){
         array2.push(arrayDoString[i]);
      }
   }
   let string2= array2.join("")
   return string2;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array3=[];
   let arrayDeFrase= frase.split("");
   let b=0;
   for (let i=0;i<arrayDeFrase.length;i++){
      if (arrayDeFrase[i]===" "){
         for (let j=i-1;j>=b;j--){
            array3.push(arrayDeFrase[j]);
         }
         array3.push(" ");
         b=i+1;
      }
      if (i===arrayDeFrase.length-1){
         for (let k=i;k>=b;k--){
            array3.push(arrayDeFrase[k]);
         }
      }
   }
   let string3= array3.join("");
   return string3;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroSeparado= numero.toString();
   let j=numeroSeparado.length-1;
   for (let i=0;i<j;i++,j--){
      if (numeroSeparado[i]!==numeroSeparado[j]){
         return "No es capicua";
      }
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // let arrayDelString= string.split();
   // for (let i=0;i<arrayDelString.length;i++){
   //    if (arrayDelString[i]==="a"||arrayDelString[i]==="b"||arrayDelString[i]==="c"){
   //       arrayDelString.splice(i);
   //    }
   // }
   // string= arrayDelString.join("");
   // return string;
   let a=string.replace("a","");
   let b=a.replace("b","");
   let c=b.replace("c","");
   return c;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newArray=[];

   
   for (let i=0;i<arrayOfStrings.length;i++){
      let menor=1000;
      for(let j=0;j<arrayOfStrings.length;j++){
         if(arrayOfStrings[j].split("").length<menor){
            menor=arrayOfStrings[j].split("").length;
            var g=j;
         }

      }
      newArray.push(arrayOfStrings[g]);
      delete(arrayOfStrings[g]);
   }
   return newArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
