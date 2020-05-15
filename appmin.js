const URL_VE="https://covid19.patria.org.ve/api/v1/summary", URL_MU="https://coronavirus-19-api.herokuapp.com/countries", URL_VE_2="https://covid19.patria.org.ve/api/v1/timeline", URL_NOTICIAS="https://api.breakingapi.com/news?q=coronavirus&type=headlines&locale=es-VE&page=3&page_size=3&api_key=8FF80FD6784843E296C3B3379F04FEFF";let casosPositivos=document.querySelector("#positivos"), casosActivos=document.querySelector("#activos"), casosRecuperados=document.querySelector("#recuperados"), casosFallecidos=document.querySelector("#fallecidos"), casosMujeres=document.querySelector("#mujeres"), casosHombres=document.querySelector("#hombres"), casosListas=document.querySelector("#contenedor-lista"), casosEdad=document.querySelector("#lista-edad"), casosPorPais=document.querySelector("#casos-por-pais"), fecha=document.querySelector("#datos"), contenedorArticulos=document.querySelector("#contenedor-articulos");async function obtenerDatosVenezuela(){const respuesta=await fetch(URL_VE); const datos=await respuesta.json(); let estados=datos.Confirmed.ByState; let edad=datos.Confirmed.ByAgeRange; try{casosPositivos.innerHTML=`${datos.Confirmed.Count}`; casosActivos.innerHTML=`${datos.Active.Count}`; casosRecuperados.innerHTML=`${datos.Recovered.Count}`; casosFallecidos.innerHTML=`${datos.Deaths.Count}`; casosMujeres.innerHTML=`Mujeres: <span>${datos.Confirmed.ByGender.female}</span>`; casosHombres.innerHTML=`Hombres: <span>${datos.Confirmed.ByGender.male}</span>`; for(let casosPorEstado in estados){let listasDeEstados=document.createElement("li"); listasDeEstados.innerHTML=`${casosPorEstado}: ${estados[casosPorEstado]}<span>casos</span>`; casosListas.appendChild(listasDeEstados);}for(let casosPorEdad in edad){let listaDeEdades=document.createElement("li"); listaDeEdades.innerHTML=`${casosPorEdad}<span>años:</span> ${edad[casosPorEdad]}<span>casos</span>`; casosEdad.appendChild(listaDeEdades);}}catch(error){console.error(error);}}obtenerDatosVenezuela();async function obtenerDatosMundo(){const respuesta_1=await fetch(URL_MU); const datos_1=await respuesta_1.json(); try{for(let i=1; i <=5; i++){let contenedor=document.createElement("div"); contenedor.innerHTML=` <div class="pais" id="pais"> <div class="nombre"><h4>${datos_1[i].country}</h4></div><div class="todos infectados"><p>${new Intl.NumberFormat().format(datos_1[i].cases)}<span>positivos</span></p></div><div class="todos activos"><p>${new Intl.NumberFormat().format(datos_1[i].active)}<span>activos</span></p></div><div class="todos recuperados"><p>${new Intl.NumberFormat().format(datos_1[i].recovered)}<span>recuperados</span></p></div><div class="todos fallecidos"><p>${new Intl.NumberFormat().format(datos_1[i].deaths)}<span>fallecidos</span></p></div></div>`; casosPorPais.appendChild(contenedor);}}catch(error){console.error(error);}}obtenerDatosMundo();async function obtenerFecha(){const respuesta_2=await fetch(URL_VE_2); const datos_2=await respuesta_2.json(); let ultimo=datos_2.pop(); try{fecha.innerHTML=`ÚLtima actualización de los datos: ${ultimo.Date}`;}catch(error){console.error(error);}}obtenerFecha();async function obtenerNoticias(){const respuesta_3=await fetch(URL_NOTICIAS); const datos_3=await respuesta_3.json(); try{for(let i=0; i <=datos_3.articles.length; i++){let articulos=document.createElement("div"); articulos.innerHTML=` <article class="articulo" id="articulos"> <h4><a href="${datos_3.articles[i].link}" target="blank">${datos_3.articles[i].title}</a></h4> </article> `; contenedorArticulos.appendChild(articulos);}}catch(error){console.error(error);}}obtenerNoticias();