$(document).ready(function() {
    //cargamos módulo de nosotros en automático
    let active = $(".active").data('opc');
    //muestra gif y esconde inicio
    $("#main").css("display", "none");
    $("#cargar").show();
    setTimeout(cargaModulos(active), 1000);

    $('.hamburger').click(function() { //cuando se le hace click al menu hamburguesa
        if (!$(this).hasClass("open")) { //si no esta abierto
            abreNav();
        } else {
            cierraNav();
        }
    }); //hamburguer	

    $('.block').click(function() {
        //cambiamos active a seleccion opc
        cambiaActive(1);
        setTimeout(cargaModulos(1), 1000);
    })

    $('.block2, .block3').click(function() {
        let sel = $(this).data('opc');
        //muestra gif y esconde inicio
        $("#main").css("display", "none");
        $("#cargar").show();
        //asignamos active
        cambiaActive(sel);
        //cargamos el módulo
        setTimeout(cargaModulos(sel), 1000);
    });

    $(".aviso").click(function() {
        let sel = $(this).data('opc');
        //muestra gif y esconde inicio
        $("#main").css("display", "none");
        $("#cargar").show();
        //cargamos el módulo
        setTimeout(cargaModulos(sel), 1000);
    });

    function abreNav() {
        $('.hamburger').toggleClass('open'); // lo habre 
        $('#menu').css('display', 'block'); //hace visible el menu
    }

    function cierraNav() {
        $('.hamburger').removeClass('open'); //si esta abierto
        $('#menu').css('display', 'none'); // lo cierra
    }

    function cambiaActive(sel) {
        $('.block2').removeClass("active");
        $('.block3').removeClass("active");
        $('ul').find("[data-opc = '" + sel + "']").addClass("active");
    }

    function cargaModulos(seleccion) {
        cierraNav();
        //subimos al inicio de la pagina web
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        switch (seleccion) {
            case 1:
                $("#main").load('home.html', function() {
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            case 2:
                $("#main").load('proposito.html', function() {
                    $.getScript("js/initaos.js");
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            case 3:
                $("#main").load('actividades.html', function() {
                    $.getScript("js/actividades.js");
                    $.getScript("js/initaos.js");
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            case 4:
                $("#main").load('testimonio.html', function() {
                    $.getScript("js/initaos.js");
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            case 5:
                $("#main").load('donar.html', function() {
                    $.getScript("js/initaos.js");
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            case 6:
                $("#main").load("aviso_privacidad.html", function() {
                    $.getScript("js/initaos.js");
                    //esconde gif
                    $("#cargar").hide();
                    $("#main").css("display", "block");
                });
                break;
            default:
                alertify.confirm("por el momento no contamos con este módulo");
        }
    }

    $(window).scroll(function() {
        let main = $("#main").offset();
        main = main.top;
        //mostrar y ocultar 
        if ($(window).scrollTop() > main) {
            $('#aprendamos').fadeIn('slow');
            $('#aprendamos').removeClass("header-transparent");
            $('.sel').removeClass("header-transparent");

        } else {
            $('#aprendamos').fadeIn('slow');
            $('#aprendamos').addClass("header-transparent");
            $('.sel').addClass("header-transparent");
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 765) {
            cierraNav();
        }
    });

    //Alertas de la página aprendamos juntos
    alertify.dialog('FormCliente', function() {
        return {
            main: function(content) {
                this.setContent(content);
            },
            setup: function() {
                return {
                    options: {
                        autoReset: true,
                        maximizable: false,
                        padding: true,
                        overflow: true,
                        title: "<img class='mi_alert' src='img/MIlogo.png'><br>"
                    }

                };
            },
        };
    }); //alertify

}); //ready