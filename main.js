const nombre = "Benjamin Cañas";

const experiencia = [
  {
    lugar: "ROSS Outside the Box",
    periodo: "2021-Actualidad",
    descripción: "Desarrollador front-end React Jr. en ROSS Outside the Box",
  },
  {
    lugar: "Freelancer",
    periodo: "2019 - 2020",
    descripción:
      "Montaje de sitios web para clientes de todo el mundo.<br> Trabajos realizados con WordPress y Woocommerce para tiendas online. Mas de 20 proyectos entregados en 23 paises. Se realizan las tareas de atención al cliente, desarrollo y capacitación en caso de ser necesario. Los proyectos necesitaron uso de CSS, HTML y JavaScript en menor medida.",
  },
  {
    lugar: "Alto Brillo S.A.",
    periodo: "2017-2018",
    descripción: "Asistente . Ayudando en el area tecnica de la empresa.",
  },
];

const estudios = [
  {
    lugar: "Escuela Nueva Juan Mantovani",
    periodo: "2012-2018",
    descripción: "Especialidad en Ciencias Naturales y Matematica",
  },
];

const proyectos = [
  {
    titulo: "AguaZarca Inmobiliaria",
    github: "https://github.com/GrandThed/AguaZarca",
    url: "https://aguazarca.com.ar/",
    descripcion:
      "El proyecto mas grande que he hecho hasta la fecha, una pagina de asuntos inmobiliarios con React y Firebase (Actualmente migrandolo a Gatsby)",
  },
  {
    titulo: "Calculadora",
    github: "https://github.com/GrandThed/javascript-calculator",
    url: "https://grandthed.github.io/javascript-calculator",
    descripcion:
      "Una simple calculadora hecha con ReactJS. No fue usada ninguna libreria y para evaluar la exprecion se uso eval().",
  },
  {
    titulo: "Reloj Pomodoro",
    github: "https://github.com/GrandThed/Pomodoro-Clock",
    url: "https://grandthed.github.io/Pomodoro-Clock",
    descripcion:
      "Un reloj pomodoro, hecho con ReactJS con la ayuda de una libreria de sonido (react-sound) y algunos trucos de css.",
  },
];

const lenguajesActuales = [
  `<i class="devicon-style devicon-react-original colored"></i>`,
  `<i class="devicon-style devicon-redux-original colored"></i>`,
  `<i class="devicon-style devicon-nodejs-plain colored"></i>`,
  `<i class="devicon-style devicon-npm-original-wordmark colored"></i>`,
  `<i class="devicon-style devicon-mongodb-plain colored"></i>`,
  `<i class="devicon-style devicon-javascript-plain colored"></i>`,
  `<i class="devicon-style devicon-css3-plain colored"></i>`,
  `<i class="devicon-style devicon-html5-plain colored"></i>`,
  `<i class="devicon-style devicon-visualstudio-plain colored"></i>`,
  `<i class="devicon-style devicon-git-plain colored"></i>`,
  // `<img src="${firebase}"></img>`
];

const lenguajesAprendiendo = [
  `<i class="devicon-style devicon-inkscape-plain colored"></i>`,
  `<i class="devicon-style devicon-python-plain colored"></i>`,
  `<i class="devicon-style devicon-sass-original colored"></i>`,
  `<i class="devicon-style devicon-typescript-plain colored"></i>`,
  `<i class="devicon-style devicon-csharp-plain colored"></i>`,
];

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name");
nombreDOM.innerText = nombre;

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`;
  document.getElementById("experiencia").appendChild(item);
}

for (i = 0; i < proyectos.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="mt-3 d-flex justify-content-between align-items-center">
    <span class="card-title h6 exp-title">${proyectos[i].titulo}</span>
    <span class="card-title h6 exp-title">
    <a target="_blank" href="${proyectos[i].github}" ><button class="btn btn-primary btn-sm"><i class="devicon-github-original github-icon-proyect"></i> repositorio</button></a>
    <a target="_blank" href="${proyectos[i].url}" ><button class="btn btn-dark btn-sm"><i class="devicon-googlecloud-plain github-icon-proyect"></i> live demo</button></a>
    </span>
    </div>
    
    <p>${proyectos[i].descripcion}</p>`;
  document.getElementById("proyectos").appendChild(item);
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`;
  document.getElementById("estudios").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = lenguajesActuales[i];
  document.getElementById("lenguajes_actuales").appendChild(item);
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++) {
  var item = document.createElement("div");
  item.innerHTML = lenguajesAprendiendo[i];
  document.getElementById("lenguajes_aprendiendo").appendChild(item);
}

function printDiv(printable) {
  var printContents = document.getElementById(printable).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
