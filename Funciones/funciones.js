/* Funcion para mostrar un mensaje cuando se clica en el boton en la pagina index.html */
function MostrarMensaje() {
	alert("Este mensaje se abre al clicar el botón")
}
/* Funcion para abrir diferentes paginas web segun el texto clicado, pagina Destinos */
function AbrirPagina(valor){
	if (valor == 1){
		window.open("https://www.gipuzkoasansebastian.eus/eu/hasiera");	
	} else {
		if (valor ==2){
			window.open("https://www.visitbiscay.eus/es/inicio");
		} else {
			if (valor ==3){
				window.open("https://alavaturismo.eus/es/");
			} else {
				if (valor ==4){
					window.open("https://www.visitnavarra.es/es/");
				} else {
					if (valor ==5){
						window.open("https://www.guide-du-paysbasque.com/es/turismo/descubrir/visitar-el-pais-vasco/el-labourd.html");
					} else {
						if (valor ==6){
							window.open("https://www.guide-du-paysbasque.com/es/turismo/descubrir/visitar-el-pais-vasco/baja-navarra.html");
						} else {
							window.open("https://www.en-pays-basque.fr/es/territorio-y-destino/zuberoa/");
						}
					}
				}
			}
		}
	}
}
/*funcion para salir un mensaje con el telefono de la diputacion foral de gipuzkoa, en la pagina participantes */
function TelefonoGipuzkoa(){
	alert("943 112111")
}
/* funcion para abrir un mensaje de correo en el programa predefinido en el ordenador, para la pagina sobrenosotros */
function Correo() {
    const Nori = "galcorta@birt.eus";
    const Gaia = "Mezua";
    const Mezua = "Estekan klikatu da";
	const mailto = `mailto:${Nori}?subject=${encodeURIComponent(Gaia)}&body=${encodeURIComponent(Mezua)}`;
	window.location.href = mailto;
    }
/* funcion para pasar a mayusculas el valor del campo izena, en la pagina Solicitarinformacion*/
function Maiuskulazjarri() {
  const input = document.getElementById("izena");
  input.value = input.value.toUpperCase();
}



