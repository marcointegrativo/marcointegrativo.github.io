$(document).ready(function() {
    AOS.init();
    $(".recuadro_p").click(function() {
        let title = $(this).data("act").toString();
        let desc = $(this).data("leyenda").toString();
        $("#tit_pop").html(title);
        $("#desc_act").html(desc);
        if (!alertify.auxConfirm) {
            //llamamos form oculto en el documento con alertify
            alertify.FormCliente($('#FormAct')[0])
                .set('position', 'bottom-center')
                .resizeTo('85%', 450);
        }
    });
}); //ready