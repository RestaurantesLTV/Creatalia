(function( e ){  

	var pathObj = {
    "rs": {
        "strokepath": [
            {
                "path": "M201.747,184.077c0,2.852-1.996,5.155-4.469,5.155h-44.703c-2.471,0-4.471-2.304-4.471-5.155H3v9.736     c0,5.685,13.104,7.116,18.562,7.116h313.481c5.447,0,15.781-1.432,15.781-7.116v-9.736H201.747z M329.763,189.59h-11.518     c-0.424,0-0.768-0.344-0.768-0.769c0-0.424,0.344-0.768,0.768-0.768h11.518c0.426,0,0.771,0.344,0.771,0.768     C330.534,189.246,330.188,189.59,329.763,189.59z",
                "duration": 1500
            },
            {
                "path": "M300.94,2H52.892c-4.771,0-8.64,3.868-8.64,8.64v148.71c0,0.037-0.006,0.073-0.006,0.11v15.715     c0,2.544,2.062,4.607,4.609,4.607h4.036h3.451h241.139h3.459h4.029c2.545,0,4.609-2.063,4.609-4.607v-3.977     c0-0.019,0-0.036,0-0.057V10.64C309.579,5.868,305.714,2,300.94,2z M176.913,6.229c1.535,0,2.779,1.244,2.779,2.778     c0,1.535-1.244,2.778-2.779,2.778s-2.777-1.243-2.777-2.778C174.136,7.474,175.378,6.229,176.913,6.229z M296.526,165.961H57.307     V15.442h239.22V165.961z",
                "duration": 1000
            },
            {
                "path": "M258.834,23.154H94.991c-3.242,0-5.872,2.632-5.872,5.876v123.346   c0,3.241,2.63,5.872,5.872,5.872h163.843c3.244,0,5.873-2.631,5.873-5.872V29.03C264.707,25.786,262.078,23.154,258.834,23.154z    M249.141,145.094H103.904V36.31h145.238L249.141,145.094z M257.586,94.738c-2.184,0-3.947-1.771-3.947-3.953   c0-2.182,1.764-3.951,3.947-3.951s3.951,1.77,3.951,3.951C261.537,92.968,259.77,94.738,257.586,94.738z",
                "duration": 1000
            },
            {
                "path": "M190.292,52.257h-27.035c-3.389,0-6.135,2.747-6.135,6.135v64.999   c0,3.389,2.746,6.135,6.135,6.135h27.035c3.389,0,6.135-2.746,6.135-6.135V58.392C196.427,55.004,193.681,52.257,190.292,52.257z    M176.718,126.388c-1.719,0-3.107-1.391-3.107-3.108c0-1.72,1.389-3.108,3.107-3.108c1.717,0,3.111,1.389,3.111,3.108   C179.829,124.997,178.435,126.388,176.718,126.388z M193.358,115.298h-33.281V65.227h33.281V115.298z",
                "duration": 800
            }
        ],
        "dimensions": {
            "width": 354,
            "height": 202
        }
    }
}; 


	$(document).ready(function(){
		
		$('.jumbotron').hover(function(e){
			$('#rs').lazylinepainter( 
				 {
				    "svgData": pathObj,
				    "strokeWidth": 2,
				    "strokeColor": "#46ff94"
				}).lazylinepainter('paint'); 					
		});

		$('#rs').mouseleave(function(e){
			$('#rs').unbind();
		});

		$('#webdesign').mouseenter(function(){
			$('#webdesign').attr('src','img/icons/web-iconh.png');

		});
		$('#webdesign').mouseleave(function(){
			$('#webdesign').attr('src','img/icons/web-icon.png');
		});


		$('#responsive').mouseenter(function(){
			$('#responsive').attr('src','img/icons/uidesignh.png');
		});
		$('#responsive').mouseleave(function(){
			$('#responsive').attr('src','img/icons/uidesign.png');
		});


		$('#plantillas').mouseenter(function(){
			$('#plantillas').attr('src','img/icons/prototipoh.png');
		});
		$('#plantillas').mouseleave(function(){
			$('#plantillas').attr('src','img/icons/prototipo.png');
		});

		$('#seo').mouseenter(function(){
			$('#seo').attr('src','img/icons/seoh.png');
		});
		$('#seo').mouseleave(function(){
			$('#seo').attr('src','img/icons/seo.png');
		});

		$('.boton').click(function (){
			var id = $(this).attr('id');
			var texto = $('#' + id + '.boton').text();

			$("#"+id).parent().prev().slideToggle(500);
			$("#"+id).toggleClass('btn-success btn-danger');


			if(texto == 'Ver más'){
					texto = texto.replace("Ver más","Cerrar");
					$("#"+id).text(texto);
					$("#"+id).next().show();	
				}else{
					texto = texto.replace("Cerrar","Ver más");
					$("#"+id).text(texto);
					$("#"+id).next().hide();
				}
			});
		/*
		$('#descripcion').children().hide();
		$('#descripcion').children().next().hide();
		$('#descripcion').children().next().hide();
   		$('.menu-modal').click(function(){
			var ref = $(this).children().attr('href');
			var id = $(this).children().attr('id');
			$('#descripcion > *:not('+ref+')').hide();
			if ( $(ref).not(":visible")){
				$(ref).show();
			}else{
				$(ref).hide();
			}*/
		
			/*
			if( $(ref).not(":visible") && $('#descripcion > *') ) 
				$(ref).slideToggle('slow');*/
			/*$("#"+id).toggle(function() {
				$("#"+id).parent().addClass('active-verde');
			}, function() {
				$("#"+id).parent().removeClass('active-verde');
			});	
   		});*/

		$('#lnk-basico').click(function() {
			$(this).parent().addClass('active-verde');			
			$('#lnk-profesional').parent().removeClass('active-verde');
			$('#lnk-premium').parent().removeClass('active-verde');
			$('#basico').show(function(){
				$('#lnk-basico').hover().css({'background-color': '#04CA8E'});
				$('#lnk-basico').css({'color':'#fff'});
				$('#lnk-premium').css({'color':'inherit'});
				$('#lnk-profesional').css({'color':'inherit'});
				$('#premium').hide();
				$('#profesional').hide();
				$('#lnk-profesional').css({'background-color': 'transparent'});	
				$('#lnk-premium').css({'background-color': 'transparent'});	
				$(this).fadeIn(2500);
			});			
		});

		$('#lnk-profesional').click(function() {
			$(this).parent().addClass('active-verde');
			$('#lnk-basico').parent().removeClass('active-verde');
			$('#lnk-premium').parent().removeClass('active-verde');
			$('#profesional').show(function(){
				$('#lnk-profesional').hover().css({'background-color': '#04CA8E'});
				$('#lnk-profesional').css({'color':'#fff'});
				$('#lnk-basico').css({'color':'inherit'});
				$('#lnk-premium').css({'color':'inherit'});								
				$('#premium').hide();
				$('#basico').hide();
				$('#lnk-premium').css({'background-color': 'transparent'});	
				$('#lnk-basico').css({'background-color': 'transparent'});
				$(this).fadeIn(2500);
			});			
					
		});

		$('#lnk-premium').click(function() {
			$(this).parent().addClass('active-verde');
			$('#lnk-profesional').parent().removeClass('active-verde');
			$('#lnk-basico').parent().removeClass('active-verde');
			$('#premium').show(function(){
				$('#lnk-premium').hover().css({'background-color': '#04CA8E'});
				$('#lnk-premium').css({'color':'#fff'});
				$('#lnk-basico').css({'color':'inherit'});
				$('#lnk-profesional').hover().css({'color':'inherit'});
				$('#lnk-basico').css({'background-color': 'transparent'});
				$('#lnk-profesional').css({'background-color': 'transparent'});	
				$('#profesional').hide();
				$('#basico').hide();
				$(this).fadeIn(2500);	
			});					
		});

		$('#tabla-profesional').hide();
		$('#tabla-premium').hide();
		$('#tabla-basico').hide();
		$('.tarifas-precios').click(function(){
			var id = $(this).next().next().next().attr('id');
			$("#"+id).fadeToggle(function(){
				$('.tarifas-precios').children().children().next().children().toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
			});
		});
	}); /* .DOCUMENT READY */ 
})( jQuery );
    
      