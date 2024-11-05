document.addEventListener('DOMContentLoaded', function(){


    navegacionFija()

    crearGaleria()

    resaltarEnlace()

    scrollnav()


}) // Esperamos hasta que este listo el HTML

function navegacionFija(){

    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){


       if (sobreFestival.getBoundingClientRect().bottom < 1){ // Revisa un elemento si estas en el o no

            header.classList.add('fixed')

       } else{

            header.classList.remove('fixed')

       }

    }
    )


}


function crearGaleria(){

    const cantidadImagenes = 12

    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i<= cantidadImagenes;  i++){

        const imagen = document.createElement('IMG')
        imagen.src = `/src/img/gallery/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        // Even handler = responder y detectar a una interaccion del usuario

        imagen.onclick = function(){ // Si el onclick lleva un parametro se usa con funcion

            mostrarImagen(i)
            
        }



        galeria.appendChild(imagen)
     


    }

}

function mostrarImagen(i){

    const imagen = document.createElement('IMG')
    imagen.src = `/src/img/gallery/${i}.jpg`
    imagen.alt = 'Imagen Galeria'


    // Generar Modal

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal // Si un onclick no lleva parametro se manda aparte la funcion
    

    // Boton cerrar modal

    const BtnCerrarModal = document.createElement('BUTTON')
    BtnCerrarModal.textContent = 'X'
    BtnCerrarModal.classList.add('btn-cerrar')
    BtnCerrarModal.onclick = cerrarModal
    modal.appendChild(imagen)
    modal.appendChild(BtnCerrarModal)

    


    // Agregar al HTML

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal(){

    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')

    setTimeout(() => {
        
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')



    },500); // ? significa si existe

     
}

function resaltarEnlace(){

    document.addEventListener('scroll', function(){

        const sections = document.querySelectorAll('section')
        const navLink = document.querySelectorAll('.navegacion-principal a')

        let actual = ''

        sections.forEach(section =>{

            const sectionTop = section.offsetTop 
            const sectionHeight = section.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){


                actual = section.id

            }
                

        })
        
        navLink.forEach(link =>{

            link.classList.remove('active')

            if(link.getAttribute('href') === '#' + actual){

                link.classList.add('active')


            }

        })

    })

}

function scrollnav(){

    const navLinks = document.querySelectorAll('.navegacion-principal a')
    navLinks.forEach(link => {

        link.addEventListener('click', e =>{

            e.preventDefault()

            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({behavior: 'smooth'})

            

        })

    })

}