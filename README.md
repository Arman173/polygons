# Programa Introductorio a la geometria computacional

El objetivo del programa es resolver problemas relacionados a poligonos y entidades geometricas con el fin de dar introduccion a la geometria computacional.

## Especificaciones del programa

### Ejecución del programa
El programa esta creado con tecnologias web tales como html, css y typescript este ultimo es compilado a javascript.
Para la ejecucion apropiada del programa es necesario compilar el codigo typescript a javascript para estos hay que:
* Tener instalado typescript de forma global
* Tener la terminal abierta en el directorio del proyecto
* Ejecutar el comando `tsc --build` en la terminal
* Con los pasos anteriores se generara una carpeta js con los archivos javascript resultado de la compilacion de typescript, ahora ya se puede proceder a ejecutar el programa en un navegador web
Para ejecutar la aplicacion en un navegador web, es necesario usar un protocolo http para ejecutar el index.html, para esto puede usar la extension [Live Server][liveserver_url] para visual studio code ó cualquier otra herramienta que cumpla esta funcion.

### Funciones del programa

* Creacion de un triangulo escaleno mediante vertices
* Calculo del area de un triangulo escaleno
* Un punto dentro de un triangulo escaleno
* Calculo de angulos internos de un triangulo escaleno
* Calculo del area de un poligono no convexo
* Division de intersecciones para formar poligonos no convexos


[comment]: <> (Referencias web)
[liveserver_url]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer