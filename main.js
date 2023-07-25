const nombre = "Benjamin Cañas";

const experiencia = [
  {
    lugar: "Bitlogic (Flutter/React/Angular)",
    periodo: "Aug. 2021-present",
    descripción: "React, Angular, and Flutter developer at Bitlogic, I contributed to multiple projects as a versatile developer. Throughout my work, I had the opportunity to learn various technologies and collaborate with diverse teams.",
  },
  {
    lugar: "ROSS Outside the Box (React)",
    periodo: "Mar. 2021 - Aug. 2021",
    descripción: "Front-End React Developer at ROSS Outside the Box, I specialized in developing software primarily catering to Human Resources needs.",
  },
  {
    lugar: "Freelancer (WordPress)",
    periodo: "Jul. 2020 - Mar. 2021",
    descripción:
      "Website development for clients from all over the world. <br> Work done with WordPress and Woocommerce for online stores. More than 20 projects delivered in 4 countries. Customer service, development and training tasks are carried out if necessary. The projects required the use of CSS, HTML and JavaScript.",
  }
];

const estudios = [
  {
    lugar: "Escuela Nueva Juan Mantovani",
    periodo: "2012-2018",
    descripción: "Specialty in Natural Sciences and Mathematics",
  },
];

const proyectos = [
  {
    titulo: "UCC - Flutter App",
    url: "https://play.google.com/store/apps/details?id=com.uccor.app&hl=en_US",
    descripcion:
      "An app developed with Flutter, which consumes the UCC (Córdoba's Catholic University in Spanish) API through a BFF developed with Golang to serve the app. It offers students the possibility to access all the functionalities of the student portal on their phones.",
  },
  {
    titulo: "UCC - React CMS",
    url: "https://www.ucc.edu.ar/",
    descripcion:
      `A CMS developed with Gatsby and Strapi for the institutional use of UCC (Córdoba's Catholic University in Spanish). The development was centered on providing the UCC staff with the possibility to edit the website content.`,
  },
  {
    titulo: "AguaZarca Inmobiliaria",
    github: "https://github.com/GrandThed/AguaZarca",
    url: "https://aguazarca.com.ar/",
    descripcion:
      "A real estate page with React and Firebase",
  }
];

const lenguajesActuales = [
  `<i class="devicon-style devicon-flutter-plain colored"></i>`,
  `<i class="devicon-style devicon-react-original colored"></i>`,
  `<i class="devicon-style devicon-redux-original colored"></i>`,
  `<i class="devicon-style devicon-nodejs-plain colored"></i>`,
  `<i class="devicon-style devicon-typescript-plain colored"></i>`,
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
  `<i class="devicon-style devicon-csharp-plain colored"></i>`,
  `<i class="devicon-style devicon-amazonwebservices-original colored"></i>`,

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
  if (proyectos[i].github == null) {
    item.innerHTML = `<div class="mt-3 d-flex justify-content-between align-items-center">
    <span class="card-title h6 exp-title">${proyectos[i].titulo}</span>
    <span class="card-title h6 exp-title">
    <a target="_blank" href="${proyectos[i].url}" ><button class="btn btn-dark btn-sm"><i class="devicon-googlecloud-plain github-icon-proyect"></i> live demo</button></a>
    </span>
    </div>
    <p>${proyectos[i].descripcion}</p>`;
  } else {
    item.innerHTML = `<div class="mt-3 d-flex justify-content-between align-items-center">
      <span class="card-title h6 exp-title">${proyectos[i].titulo}</span>
      <span class="card-title h6 exp-title">
      <a target="_blank" href="${proyectos[i].github}" ><button class="btn btn-primary btn-sm"><i class="devicon-github-original github-icon-proyect"></i> repository</button></a>
      <a target="_blank" href="${proyectos[i].url}" ><button class="btn btn-dark btn-sm"><i class="devicon-googlecloud-plain github-icon-proyect"></i> live demo</button></a>
      </span>
      </div>
      <p>${proyectos[i].descripcion}</p>`;
  }
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
