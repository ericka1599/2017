var turno = "X";	
var turno2= "O";
var bandera=1;
var ban=false;
var opciones = [];

function marcar(id){
	var celda = document.getElementById(id);
	if(bandera%2!=0 && opciones[id]!=0){
		celda.value = turno;
		document.getElementById("div_turno").innerHTML="Turno del jugador : "+turno2;celda.style.background="#5D418B";
		opciones[id]=1;
		bandera++;
	}else if(bandera%2==0 && opciones[id]!=1){
		celda.value=turno2;
		document.getElementById("div_turno").innerHTML="Turno del jugador : "+turno;celda.style.background="#9376A7";
		opciones[id]=0;
		bandera++;
	};
	jugadorX();
	jugadorO();
};

function jugadorX(){
	if(opciones[1]==1 && opciones[2]==1 && opciones[3]==1){
		alert("Jugador " +turno+ " Ganaste");
	}else if(opciones[4]==1 && opciones[5]==1 && opciones[6]==1){
		alert("Jugador " +turno+ " Ganaste")
	}else if(opciones[7]==1 &&opciones[8]==1 && opciones[9]==1){
		alert("Jugador"+turno+" Ganaste")
	}else if(opciones[1]==1 && opciones[5]==1 &&opciones[9]==1){
		alert("Jugador"+turno+" Ganaste")
	}else if(opciones[3]==1 && opciones[5]==1 &&opciones[7]==1){
		alert("Jugador " +turno+ " Ganaste");
	}else if(opciones[1]==1 && opciones[4]==1 &&opciones[7]==1){
		alert("Jugador " +turno+ " Ganaste");
	}else if(opciones[2]==1 && opciones[5]==1 &&opciones[8]==1){
		alert("Jugador " +turno+ " Ganaste");
	}else if(opciones[3]==1 && opciones[6]==1 &&opciones[9]==1){
		alert("Jugador " +turno+ " Ganaste");
	}
}

function jugadorO(){
	if(opciones[1]==0 && opciones[2]==0 && opciones[3]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[4]==0 && opciones[5]==0 && opciones[6]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[7]==0 && opciones[8]==0 && opciones[9]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[1]==0 && opciones[5]==0 &&opciones[9]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[3]==0 && opciones[5]==0 &&opciones[7]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[1]==0 && opciones[4]==0 &&opciones[7]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[2]==0 && opciones[5]==0 &&opciones[8]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}else if(opciones[3]==0 && opciones[6]==0 &&opciones[9]==0){
		alert("Jugador " +turno2+ " Ganaste");
	}
}

function reiniciar(){
	location.reload();
}