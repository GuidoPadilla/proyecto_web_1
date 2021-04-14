# Proyecto Web 1 imitación de pagina existente
## Description
Este proyecto se realizo por la entrega del proyecto #1 de sistemas y tecnologías web, donde se trato de realizar una imitación de la pagina principal de un sitio, en este caso se decidio realizar a [Asus](https://www.asus.com/), se utilizo el framework de react en conjunto con javascript y css para realizar la imitación, cabe resalatar que solamente se realizo el diseño de la pagina principal y no del sitio entero.
## Installation
Para poder correr el pyoyecto de forma local debera de instalarse node.js, al tener instalado node debera de realizar la siguiente sucesión de comandos:
`npm install`
Este comando descarga las dependencias de librerias que permiten el funcionamiento correcto del proyecto, luego
`npm run build`
Realizara la compilacion del codigo para dar a resultado en un index.html y index_bundle.js en el directorio de dist, el index.html puede verse agregado debido a que se utilizo un plugin en webpack llamado HTML webpack plugin [link](https://webpack.js.org/plugins/html-webpack-plugin/)

De forma opcional si se desea mantener este archivo para modificaciones de forma local puede correrse el siguiente script:
`npm run serve`
creando un servidor local en el puerto 8080 siendo accesible en cualquier momento mientras este en funcionamiento de forma local
