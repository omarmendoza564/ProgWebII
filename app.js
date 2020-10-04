data = [{"directorio": "01Scripts","archivos": ["01html.html", "02dom.html", "02dom_practica.html", "03dom_estructura.html"]}, {"directorio": "02Scripts","archivos": ["01JSAtributos.html", "01JSReferencias.html", "01ReferenciasJS.html", "02JSSalida.html", "03JSTipoDatos.html", "04JSVariables.html", "051Bienvenido.html", "051JSCondicionales.html", "052JSTernario.html", "053JSBucles.html", "06JSFunciones.html"]}, {"directorio": "03Scripts","archivos": ["01Objetos.html", "02EnumPropsObjetos.html", "03Arrays.html", "04ArraysEjercicio.html", "04ArraysPropMetodos.html", "05ObjByTagName.html", "06EjemploArray.html"]}, {"directorio": "04Scripts","archivos": ["02QuerySelector.html", "03ObjectCollection.html", "04OtrosObjetos.html", "05CambioEstilo.html", "06AnimacionBasica.html"]}];
text = "<h3 class='margin'>Sesiones</h3><br>";
ncol = 1
for (obj of data) {
	x = "";
	if(ncol == 1){
		text += "<div class='row'>";
	}
	x += `<div class="col-sm-4 text-left">`;
    x += "<h3>"+obj.directorio+"</h3>";
    x += `<ul class="list-group">`;
    for (i in obj.archivos) {
    	if(obj.archivos[i].length > 0){
	  		x += "<li class='list-group-item'><a href='"+obj.directorio+"/"+obj.archivos[i] +"'>"+obj.archivos[i] + "</a></li>";
	  	}
	}
    x += `</ul>
    	</div>`;
    if(ncol == 4){
		text += "</div>";
		ncol = 1;
	}
	ncol ++;
	text += x;
}


document.getElementById("sesiones").innerHTML = text;

    
 