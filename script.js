function laskutehtava(ekaArvo, tokaArvo){
  return ekaArvo + tokaArvo;
}

console.log('Täällä ollaan!');

let ika = 17; // numerot kirjoitetaan ilman lainausmerkkejä
ika = ika + 1; //integer (int)

let ikakirjaimina = "44"; //string (str)
ikakirjaimina = ikakirjaimina + 1;

console.log(ikakirjaimina);

console.log("Sinun ikäsi on: " + ika);

let juuvaiei = true; //boolean

console.log("Boolean: " + juuvaiei);

let nimi = "Keijo";

console.log("Kirjoita isolla: " + nimi.toUpperCase());

console.log("Splittausharjoitus: " + nimi.split(" ")[0]);

// While ja for loop:

for(let i=0; i<=10; i++){
  console.log("Loopin iteraatioluku on: " + i);
}

if(ika > 18 || nimi == "Mira Annika Vorne"){
  console.log("Onnea, olet täysi-ikäinen ja/tai olet Mira!");
}
else if(ika === 18 && nimi == "Keijo"){
  console.log("Onnea Keijo, olet juuri ja juuri täysi-ikäinen!");
}
else{
  console.error("Kasva vielä vähän...");
}

console.log(laskutehtava(92874287, 94803945));

/*let pvm = "2021/08/18";

function pvmFin(vuosi, kk, pv){
  return pv + "." + kk + "." + vuosi;
}

for(let i=1; i<=15; i++){
  console.log(pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));
}
*/

let pvm="2021/08/18";

function pvmFin(vuosi,kk,pv){
  if (kk==03 || kk==04 || kk==05){
    console.log("kevät");
  }
  else if(kk==06 || kk==07 || kk==08){
    console.log("kesä");
  }
  else if(kk==09 || kk==10 || kk==11){
    console.log("syksy");
  }
  else{
    console.log("talvi");
  }
	return ""+pv+"."+kk+"."+vuosi;
}

for(let i=1; i<=15; i++){
  console.log(i+ " " + pvmFin(pvm.split("/")[0], pvm.split("/")[1], pvm.split("/")[2]));
}
/*
Monen
rivin 
kommentti
*/


//console.log(document.querySelector('#kentta').type);
//console.log(document.querySelector('.lisaaNappi').value);

document.querySelector('.lisaaNappi').addEventListener('click', e =>{
  e.preventDefault();
  console.log(document.querySelector('#kentta').value); 

  document.querySelector('.ilmoitus').innerHTML = "Kentän sisältö on: <b>" + document.querySelector('#kentta').value + "</b>";

  setTimeout(() => document.querySelector('.ilmoitus').innerHTML='', 3000);
})


document.querySelector('.merkinta').addEventListener('click', e =>{
  e.preventDefault();
  if(document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>Tehtävä A on nyt tehty!</li>';
  }
  else{
     document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a">Tehtävä A</li>';
  }

  if(document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>Tehtävä B on nyt tehty!</li>';
  }
  else{
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b">Tehtävä B</li>';
  }
});





/*
if(document.querySelector('#teht_a').checked){
    document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a" checked>Tehtävä A on nyt tehty!</li>';
  }
  else{
     document.querySelector('.boksit').children[0].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_a">Tehtävä A</li>';
  }
  if(document.querySelector('#teht_b').checked){
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b" checked>Tehtävä B on nyt tehty!</li>';
  }
  else{
    document.querySelector('.boksit').children[1].innerHTML = '<li class="sisalto"><input type="checkbox" id="teht_b">Tehtävä B</li>';
  }
  */