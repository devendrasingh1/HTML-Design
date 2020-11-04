(function($) {
	"use strict";
	//home slider height
	var wind_h = $(window).outerHeight();
	if ($(window).width () > 991){
		$(".home_slides").css('min-height',wind_h);
	}
	//Accordion js
	$(".panel_heading a").on("click", function(e){
		e.preventDefault();
	});
	$(".active_data").show();
    $('.panel_heading').click(function (e){
		$(".panel_heading").removeClass("active_head");
		if($(this).next('.panel_content').css('display') != 'block'){
			$('.active_data').removeClass('active_data').slideUp(500);
			$(this).next('.panel_content').addClass('active_data').slideDown(500);
			$(this).addClass("active_head");
		} else {
			$('.active_data').removeClass('active_data').slideUp(500);
		}
	});
	//tabs Menu
	$('.tab_menu .tab_link').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.tab_menu .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//chat tabs
	$('.msg_tabs li').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.msg_tabs li').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//login tabs
	$('.login_link').on('click', function(e){
		e.stopPropagation();
		$(".login_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.login_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	$('.close_login').click(function(){
 		$(this).parents(".login_content").removeClass("active");
 		$('.login_link').removeClass("active");
	});
	//dropdown menu js
	$('.nav_toggle').on('click', function(){
		$(".home_navigation").toggleClass("menu_open");
		$(".home_navigation").slideToggle(300);
	});
	//dropdown menu js
	$('.widger_title').on('click', function(){
		$(this).next(".widget_collapes").slideToggle(300);
	});
	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".home_navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fas fa-chevron-down'></i></span>");
		$(".home_navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
		});
	}
	else {
		
	}
	//Datepicker
	if($(".calendar_dv").length > 0){
		$( ".calendar_dv" ).datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		});
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
    //dropdown menu
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//profile syncronize slider
	$(document).ready(function() {
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var slidesPerPage = 5; //globaly define number of elements per page
	  var syncedSecondary = true;
	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    nav: false,
	    autoplay: false,
	    dots: false,
	    loop: true,
	    responsiveRefreshRate : 200,
	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    margin:2,
	    dots: false,
	    nav: true,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    autoplay: false,
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100,
	    responsive:{
				 0:{
		            items:3
		        },
		        390:{
		            items:4
		        },
		        460:{
		            items:5
		        },
		        768:{
		            items:4
		        },
		        992:{
		            items:4
		        },
		        1199:{
		            items:5
		        }
		    },
	  }).on('changed.owl.carousel', syncPosition2);

	  function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	    
	    //if you disable loop you have to comment this block
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    
	    //end block

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	  }
	  
	  function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
	  }
	  
	  sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	  });
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			mode:"fade",
			items:1,
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:4000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0:{
		            dots:true,
		            nav:false,
		        },
		        768:{
		            dots:false,
		            nav:true,
		        },
		    }
			
		});
	}
   //footer collapse 
	$('.footer_collapse').on('click', function(){
		$(".footer_section").toggleClass("close_footer");
		$(".footer_section_inner").slideToggle(300);
	});
	//footer collapse 
	$('.filter_collapse').on('click', function(){
		$(".filter_box_wrap").toggleClass("close_filter");
		$(this).prev(".filter_box").slideToggle(300);	
	});
	//slider ifo collapse
	$('.profile_info_btn').on('click', function(){
		$(".pofile_slides_desc").slideToggle(300);
	});
	//sidebar show in mobile
	$('.sidebar_toggle').on('click', function(){
		$(".left_sidebar").toggleClass("side_open");
		$(".left_sidebar").slideToggle(300);
	});
	//chat sidebar js
	$('.chat_open').on('click', function(){
		$(".chatting_wrapper").toggleClass("sidebar_open");
	});
	$('.chat_close').on('click', function(){
		$(".chatting_wrapper").removeClass("sidebar_open");
	});
	//custom selectpicker
	$(".custom_select select").each(function(){
		$(this).after("<span class='select_holder'></span>");
	});
	$(".custom_select select").change(function(){
		var selectedOption = $(this).find(":selected").text();
		$(this).next(".select_holder").text(selectedOption);
	}).trigger('change');
	//Age range slider
	  $( function() {
	    $( ".range_slider" ).slider({
	      range: true,
	      min: 0,
	      max: 100,
	      values: [ 0, 50 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val(  + ui.values[ 0 ] + "-" + ui.values[ 1 ] );
	      }
	    });
	    $( "#amount" ).val(+ $( ".range_slider" ).slider( "values", 0 ) +
	      " - " + $( ".range_slider" ).slider( "values", 1 ) );
	  });
	  
	//fix search sidebar on scroll
	var sidebar = $('.right_search_sidebar');
	var sidebar_top = sidebar.offset().top;
    $(window).scroll(function () {
        var w_scroll = $(window).scrollTop();
        if (w_scroll >=sidebar_top & w_scroll <=1500) {
            sidebar.addClass("sidebar_fix");
        } 
		else{
            sidebar.removeClass("sidebar_fix");
        } 
    });
	//Append input field on click
	var ad = 1;
	$('.add_on_btn').on('click', function(){
		ad++;
		var html = '<div class="addons_form_row" id="add_row'+ad+'">\
						<div class="row">\
							<div class="col-md-6 col-12">\
								<div class="form_group">\
									<div class="input_group">\
										<input type="text" placeholder="Enter Title" class="form-control" name="titlee[]">\
									</div>\
								</div>\
							</div>\
							<div class="col-md-3 col-12">\
								<div class="form_group">\
									<div class="input_group">\
										<input type="text" placeholder="Enter Price" class="form-control" name="pricee[]">\
									</div>\
								</div>\
							</div>\
							<div class="col-md-3 col-12">\
								<div class="form_group">\
									<div class="input_group">\
										<select class="form-control" name="days[]">\
										  <option value="">Select Delivery Days</option>\
										  <option value="1">1</option>\
										  <option value="2">2</option>\
										  <option value="3">3</option>\
										  <option value="4">4</option>\
										  <option value="5">5</option>\
										</select>\
									</div>\
								</div>\
							</div>\
						</div>\
						<span class="row_btns remove_row_btn" id="btn'+ad+'"><i class="fas fa-minus"></i></span>\
					</div>';
		$('.addons_form_wrap').append(html);
	});
	//remove field
	$(document).on('click', '.remove_row_btn', function(){
		//var button_id = $(this).attr("id");
		var remove_prnt = $(this).parents(".addons_form_row");
		$(remove_prnt).remove();
	});
	//file upload js
	$('#file_upload_new').change(function() {
	  var i = $(this).prev('.custom_file_upload').clone();
	  var file = $('#file_upload_new')[0].files[0].name;
	  $(this).prev('.custom_file_upload').html('<i class="fa fa-cloud-upload"></i>'+file);
	});
})(jQuery);
//copy to clip board on click
function copybutton() {
  /* Get the text field */
  var copyText = document.getElementById("ref_code");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}