const gatos = [
  {
    name: 'Rodolfo',
    shortDesc:
      'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
    colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
    sexo: 'm',
  },

  {
    name: 'Muzzarella',
    shortDesc:
      'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
    colores: ['gris'],
    sexo: 'f',
  },

  {
    name: 'Artilugia',
    shortDesc:
      'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
    colores: ['negro', 'blanco'],
    sexo: 'f',
  },

  {
    name: 'Wosito',
    shortDesc:
      'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
    colores: ['rayado'],
    sexo: 'm',
  },

  {
    name: 'Calamardo',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 2',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 3',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 4',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 5',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },
];

const cont = document.querySelector('.adopt');

gatos.map(gato => {
  cont.innerHTML += `
    <div class="column is-half">
      <article class="card">
         <div class="columns">
              <div class="column">
                    <div class="card-image">
                        <figure class="image is-16by9 card_img">
                             <img src="${gato.img}" />
                        </figure>
                    </div>
              </div>
              <div class="column">
                    <div class="card-content">
                          <h3 class="title is-5">${gato.name}</h3>
                          <p class="content">
                            ${gato.shortDesc}
                          </p>
                          <button class="button btn-ver-mas">Ver mas</button>
                          <i id="corazon" class="icon fa fa-heart"></i> 
                          <p id="likes">0<p>
                    </div>
              </div>
          </div>          
       </article>
    </div>
  `;
});

const corazones = document.querySelectorAll('#corazon');
const likes = document.querySelectorAll('#likes');


console.log(corazones);

// forEach

corazones.forEach((corazon, indiceCorazon) => {
  corazon.onclick = () => {
    console.log("me hicieron click", indiceCorazon)

    likes.forEach((like, indiceLike) => {
      if (indiceCorazon === indiceLike) {
        let cantidadDeLikes = Number(like.textContent);
        cantidadDeLikes++
        like.textContent = cantidadDeLikes
      }
    })

    // mega sugerencia de marian:
    // let cantidadDeLikes = Number(likes[indiceCorazon].textContent);
    // cantidadDeLikes++
    // likes[indiceCorazon].textContent = cantidadDeLikes
  };
});


// MODAL VER MAS

const botonesVerMas = document.querySelectorAll(".btn-ver-mas")
console.log(botonesVerMas)
const modalCard = document.querySelector(".modal-card")
const modal = document.querySelector(".modal")

botonesVerMas.forEach((btnVerMas, indiceBtn) => {
  btnVerMas.onclick = () => {
    console.log("me hicieron click")

    const gatitoElegido = gatos[indiceBtn]


    modalCard.innerHTML = `
 
  <article class="card">
    <div class="columns">
        <div class="column">
              <div class="card-image">
                  <figure class="image is-16by9 card_img">
                        <img src="${gatitoElegido.img}" />
                  </figure>
              </div>
        </div>
        <div class="column">
              <div class="card-content">
                    <button class="button" id="close" aria-label="close">
                          <i class="icon far fa-window-close"></i>
                    </button>
                    <h3 class="title is-5">${gatitoElegido.name}</h3>
                    <p class="content">
                      ${gatitoElegido.shortDesc}
                    </p>
                    <i id="corazon" class="icon fa fa-heart"></i> 
                    <p id="likes">0<p>
              </div>
        </div>
    </div>          
  </article>
 
  `
    modal.classList.add("is-active")


    // CERRAR MODAL

    const botonCerrarModal = document.querySelector("#close")
    console.log(botonCerrarModal)

    botonCerrarModal.onclick = () => {
      console.log("hiciste click en cerrar")
      modal.classList.remove("is-active")
    }

  };
});


