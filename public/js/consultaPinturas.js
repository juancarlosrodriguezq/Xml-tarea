let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
                 
        listarPaints(this);
    } 
}; 

xhr.open("GET", "http://127.0.0.1:5501/public/data/obras.xml", true);
xhr.send(); 

function listarPaints (objXML){
    
    let respXML = objXML.responseXML;    

    let lista = respXML.getElementsByTagName('pinturas');

    let tabla = document.querySelector('#listado tbody');

    if (lista.length < 1){

        let fila = document.createElement('tr');    
        let celda = document.createElement('td');

        celda.setAttribute('colspan', '3');
        celda.textContent = 'No existen pinturas a ver';

        fila.appendChild(celda);

        tabla.appendChild(fila);
    }    

    
    for (let i=0; i<lista.length; i++){
        
        let paint       = document.createElement('tr');    
        let nombrePaint  = document.createElement('td');
        let ArtistaPaint = document.createElement('td');
           
        nombrePaint.textContent = lista[i].getElementsByTagName('nombre')[0].textContent;        

       // console.log(lista[i].getElementsByTagName('director')[0].getAttribute('nombre'));

        ArtistaPaint.textContent = lista[i].getElementsByTagName('artista')[0].getAttribute('nombre') + ' ' + 
                       lista[i].getElementsByTagName('artista')[0].getAttribute('apellido');


        paint.appendChild(nombrePaint);
        paint.appendChild(ArtistaPaint);
    
        tabla.appendChild(paint);
    }

}