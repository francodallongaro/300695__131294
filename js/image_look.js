derecha = () =>  $('.welcome-image').attr('src', "assets/img/derecha.HEIC");
izquierda = () =>  $('.welcome-image').attr('src', "assets/img/izquierda.HEIC");
abajo = () =>  $('.welcome-image').attr('src', "assets/img/abajo.HEIC");
gif = () => $('.welcome-image').attr('src', "assets/img/cami.GIF")

$( '.projects' ).hover(derecha, gif)
$( '.about-me' ).hover(izquierda, gif)
$( '.contact' ).hover(abajo, gif)

