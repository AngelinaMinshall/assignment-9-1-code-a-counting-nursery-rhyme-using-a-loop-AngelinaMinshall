/*

Ten fat sausages in the frying pan.
One went pop, one went bam!
Eight fat sausages in the frying pan.
One went pop, one went bam!
Six fast sausages in the frying pan.
One went pop, one went bam!
Four fat sausages in the frying pan.
One went pop, one went bam!
Two fat sausages in the frying pan.
One went pop, one went bam!
No more sausages.

I’m still hungry!

*/

// var word = "sausages";
//     var count = 10;

//    while (count > 0) {
//      console.log(count + " " + word + " frying in a pan");
//      console.log("one went pop, one went bam!,");
//      count = count - 2;

//    if (count > 0) {
   
//    } else {
//       console.log("No more  " + word + " I'm still hungry");
//      }



const list = document.querySelector('#list');

for(var sausages = 10; sausages >= 0; sausages--) {
  let textString = `${ sausages } fat sausages frying in a pan, one went pop and one went bam.`
  
  const verse = document.createElement('p');
  verse.textContent = textString;

  list.appendChild(verse)
} 

let newString = `No more sausages, I'm still hungry.`
const verse = document.createElement('p');
verse.textContent = newString;
list.appendChild(verse)
 