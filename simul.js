/* déclaration d'une variable ciblant un élément html */
let bul_T1 = document.querySelector("#bul_T1");
let bul_T2 = document.querySelector("#bul_T2");
let bul_T3 = document.querySelector("#bul_T3");
let HG_T1 = document.querySelector("#HG_T1");
let HG_T2 = document.querySelector("#HG_T2");
let HG_T3 = document.querySelector("#HG_T3");
let LVA_T1 = document.querySelector("#LVA_T1");
let LVA_T2 = document.querySelector("#LVA_T2");
let LVA_T3 = document.querySelector("#LVA_T3");
let LVB_T1 = document.querySelector("#LVB_T1");
let LVB_T2 = document.querySelector("#LVB_T2");
let LVB_T3 = document.querySelector("#LVB_T3");
let ES_T1 = document.querySelector("#ES_T1");
let ES_T2 = document.querySelector("#ES_T2");
let ES_T3 = document.querySelector("#ES_T3");
let SPE3_T1 = document.querySelector("#SPE3_T1");
let SPE3_T2 = document.querySelector("#SPE3_T2");
let SPE3_T3 = document.querySelector("#SPE3_T3");
let FR_EC = document.querySelector("#FR_EC");
let FR_OR = document.querySelector("#FR_OR");

/* variable lié à l'élément div */
let reponse = document.querySelector("#reponse");

function simuler() {
	let nbtrim = 3;
	let moy_bul = 0;
	let note_FREC = 0;
	let note_FROR = 0;
	
	/* Bulletins trimestriels */
	if (bul_T1.value != "") {
		let note_T1 = parseFloat(bul_T1.value);
		moy_bul += note_T1;} 
		else 
		{ nbtrim -= 1;};
	if (bul_T2.value != "") 
		{let note_T2 = parseFloat(bul_T2.value);
		moy_bul +=note_T2} 
		else 
		{ nbtrim -= 1;}; 
	if (bul_T3.value != "") 
		{let note_T3 = parseFloat(bul_T3.value);
		moy_bul +=note_T3} 
		else 
		{ nbtrim -= 1;}; 
	bul=(moy_bul/nbtrim) ;
	bul_str=bul.toFixed(2);
	/* Histoire-Géo */
	nbtrim = 3 ;
	let moy_HG = 0;
	if (HG_T1.value != "") {
		let note_HG1 = parseFloat(HG_T1.value);
		moy_HG += note_HG1;} 
		else 
		{ nbtrim -= 1;};
	if (HG_T2.value != "") 
		{let note_HG2 = parseFloat(HG_T2.value);
		moy_HG +=note_HG2} 
		else 
		{ nbtrim -= 1;}; 
	if (HG_T3.value != "") 
		{let note_HG3 = parseFloat(HG_T3.value);
		moy_HG +=note_HG3} 
		else 
		{ nbtrim -= 1;}; 
	HG=(moy_HG/nbtrim) ;
	/* LVA */
	nbtrim = 3 ;
	let moy_LVA = 0;
	if (LVA_T1.value != "") {
		let note_LVA1 = parseFloat(LVA_T1.value);
		moy_LVA += note_LVA1;} 
		else 
		{ nbtrim -= 1;};
	if (LVA_T2.value != "") 
		{let note_LVA2 = parseFloat(LVA_T2.value);
		moy_LVA +=note_LVA2} 
		else 
		{ nbtrim -= 1;}; 
	if (LVA_T3.value != "") 
		{let note_LVA3 = parseFloat(LVA_T3.value);
		moy_LVA +=note_LVA3} 
		else 
		{ nbtrim -= 1;}; 
	LVA=(moy_LVA/nbtrim) ;
	LVA_str=LVA.toFixed(2);
	/* LVB */
	nbtrim = 3 ;
	let moy_LVB = 0;
	if (LVB_T1.value != "") {
		let note_LVB1 = parseFloat(LVB_T1.value);
		moy_LVB += note_LVB1;} 
		else 
		{ nbtrim -= 1;};
	if (LVB_T2.value != "") 
		{let note_LVB2 = parseFloat(LVB_T2.value);
		moy_LVB +=note_LVB2} 
		else 
		{ nbtrim -= 1;}; 
	if (LVB_T3.value != "") 
		{let note_LVB3 = parseFloat(LVB_T3.value);
		moy_LVB +=note_LVB3} 
		else 
		{ nbtrim -= 1;}; 
	LVB=(moy_LVB/nbtrim) ;
	LVB_str=LVB.toFixed(2);
	/* Enseignement scientifique */
	nbtrim = 3 ;
	let moy_ES = 0;
	if (ES_T1.value != "") {
		let note_ES1 = parseFloat(ES_T1.value);
		moy_ES += note_ES1;} 
		else 
		{ nbtrim -= 1;};
	if (ES_T2.value != "") 
		{let note_ES2 = parseFloat(ES_T2.value);
		moy_ES +=note_ES2} 
		else 
		{ nbtrim -= 1;}; 
	if (ES_T3.value != "") 
		{let note_ES3 = parseFloat(ES_T3.value);
		moy_ES +=note_ES3} 
		else 
		{ nbtrim -= 1;}; 
	ES=(moy_ES/nbtrim) ;
	ES_str=ES.toFixed(2);
	/* 3ème spécialité */
	nbtrim = 3 ;
	let moy_SPE3 = 0;
	if (SPE3_T1.value != "") {
		let note_SPE31 = parseFloat(SPE3_T1.value);
		moy_SPE3 += note_SPE31;} 
		else 
		{ nbtrim -= 1;};
	if (SPE3_T2.value != "") 
		{let note_SPE32 = parseFloat(SPE3_T2.value);
		moy_SPE3 +=note_SPE32} 
		else 
		{ nbtrim -= 1;}; 
	if (SPE3_T3.value != "") 
		{let note_SPE33 = parseFloat(SPE3_T3.value);;
		moy_SPE3 +=note_SPE33} 
		else 
		{ nbtrim -= 1;}; 
	SPE3=(moy_SPE3/nbtrim) ;
	SPE3_str=ES.toFixed(2);
	/*console.log(bul,HG,LVA,LVB,ES,SPE3)*/
	/* FRANCAIS */
	coefepreuves = 10
	let moy_FR = 0;
	let FR = 0;
	if (FR_EC.value != "") {
		note_FREC = parseFloat(FR_EC.value);
		moy_FR += note_FREC;} 
		else 
		{ coefepreuves -= 5;};
	if (FR_OR.value != "") 
		{note_FROR = parseFloat(FR_OR.value);
		moy_FR +=note_FROR} 
		else 
		{ coefepreuves -= 5;}; 
	
	if (coefepreuves == 10 ) 
		{FR=moy_FR/2} ;
	FR_str=FR.toFixed(2);
	if (isNaN(bul)|| isNaN(HG) || isNaN(LVA) || isNaN(LVB) || isNaN(ES) || isNaN(SPE3)) 
		{alert("Il faut au moins une note dans chaque matière sauf le français");}
	else{
	/*console.log(bul,typeof(bul),HG,LVA,LVB,ES,SPE3,FR)*/
	if (coefepreuves != 0)
		{
		if (note_FREC == 0 || note_FROR == 0) {
			alert("Il faut deux notes pour le français");
			}
		else {
			reponse.innerHTML = ("Avec 30% des résultats (avec le français), vous avez : "+ ((HG*2.5 + bul*5 + LVA*2.5 + LVB*2.5+ ES*2.5 + SPE3*5 + FR*10)/30).toFixed(2)+ " sur 20");
			reponse.style.background = "#A29EFA"
			reponse.style.borderColor = "#AAAAAA";
			}
		}
	else
		{
		reponse.innerHTML = ("Avec 20% des résultats (sans le français), vous avez : "+ ((HG*2.5 + bul*5 + LVA*2.5 + LVB*2.5+ ES*2.5 + SPE3*5 )/20).toFixed(2)+ " sur 20");
		reponse.style.background = "#79F8F8";
		}
	}
};
