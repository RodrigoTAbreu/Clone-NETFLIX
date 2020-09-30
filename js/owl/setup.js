$('.owl-carousel').owlCarousel({
    loop:true, /*Torna o loop infinito*/
    margin:12, /**Margem entre as imagens*/
    nav:false, /*Habilita os botões de navegação*/
    responsive:{ /* Trata a responsividade */
        0:{ /*Medida da tela em 0, ela apresentará 1 item */
            items:1
        },
        600:{ /*Medida da tela em 600 ela apresenta3 itens*/
            items:3
        },
        1000:{ /*medidad da tela em 1000 ela apresenta 5 itens */
            items:6
        }
    }
})