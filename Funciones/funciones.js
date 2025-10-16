function MostrarMensaje() {
	alert("Este mensaje se abre al clicar el botón")
}

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

function TelefonoGipuzkoa(){
	alert("943 112111")
}

function Correo() {
      const Nori = "galcorta@birt.eus";
      const Gaia = "Mezua";
      const Mezua = "Este es el contenido del mensaje.";


      const mailto = `mailto:${Nori}?subject=${encodeURIComponent(Gaia)}&body=${encodeURIComponent(Mezua)}`;
alert("mezua");
      window.location.href = mailto;
    }






