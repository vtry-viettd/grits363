/*
----------------------------------------------------------------------

A compilation of common javascript for grits project.

VIETRY CO., LTD.
Lastest update 14/07/2020.
Author: BaoPD

----------------------------------------------------------------------
*/


// Common scripts

$(function(){
	"use strict";
	
	var isMobile = false;
	function check_mobile() {
		var check = false;
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
			check = true;
		}
		return check;
	}
	check_mobile();
	isMobile = check_mobile();
	$(window).resize(function(){
		check_mobile();
	 	isMobile = check_mobile();
	});

	$(".button-toggle, .menu_toggle a, .menu_toggle .close").on("click", function(){
		$(".button-toggle").stop().toggleClass("active");
		$("#nav-icon").stop().toggleClass("open");
		$(".menu_toggle").stop().toggleClass("active");
		$("html, body").stop().toggleClass("ovh");
		
		var text = $('#menu_btn').text();
		$('#menu_btn').text(text == "MENU" ? "CLOSE" : "MENU");
	});
	

	function header_mobile() {
		let y = 0;
		$(document).on('scroll', function() {
			y = $(this).scrollTop();
			if ( y > 10 ) {
				$("header").addClass("active");
			}
			else {
				$("header").removeClass("active");
			}
			switch (isMobile) {
				case true:
					if ( y > 10 ) {
						$(".fixed_banner").addClass("active");
					}
					else {
						$(".fixed_banner").removeClass("active");
					}
					break;
				case false:
					
					$(".fixed_banner").removeClass("active");
					break;
			}
		});
	}
	header_mobile();
	
	
	// To Top
	var mv_h, win_h;
	var y = 0;
	mv_h = $('.key').height();
	$(document).on('scroll', function () {
		y = $(this).scrollTop();
		
		win_h = $(window).height() - 200;
		if ((y > 100) && (y > mv_h - win_h)) {
			$(".totop, .bnr_corona").addClass('active');
		} else {
			$(".totop, .bnr_corona").removeClass('active');
		}

	});
	$(".totop").on("click", function() {
		$('html,body').animate({ scrollTop: 0}, 400);
	});
	
	
	// Navi
	if( $(".pc_navi").length ) {
		$(".pc_navi > ul > li").on("mouseenter", function(){
			$(this).find(".subInner").addClass("active");
		});
		$(".pc_navi > ul > li").on("mouseleave", function(){
			$(this).find(".subInner").removeClass("active");
		});
	}
	
	
	




});




/*******************************************************************************************
*******************************************************************************************
*******************************************************************************************/



// Common Library

$(function(){
	const lib = new gritsProjectCommonLib();
})

// Scripts constructor.
// If not sure please leave this unchange.
const gritsProjectCommonLib = function() { 
	this.tab = function(Container, Content, Pager){
		if( $(Container).length ) {
			$(Container).each(function(){
				var content = $(this).find(Content);
				var pager = $(this).find(Pager);
				var item = content.children();
				var pagerItem = pager.children();
				item.first().addClass("active");
				pagerItem.first().addClass("active");
				
				var SetHeight = function() {
					setTimeout(function(){
						content.height( item.filter(".active").outerHeight(true) );
					}, 100);
				};
				
				SetHeight();
				$(window).resize(function() {
					SetHeight();
	            });
				
				pagerItem.on("click", function(e) {
					e.preventDefault();
					e.stopPropagation();
					var index = $(this).attr("data-index");
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
					item.removeClass("active");
					item.eq(index - 1).addClass("active");
					SetHeight();
				});
			});
		}
		/* Usage
			└── [HTML]
				<div class="TabContainer">
					<ul id="Pager" class="TabPager">
						<li data-index="01" href="" class="active"><p>1</p></li>
						<li data-index="02" href=""><p>2</p></li>
						<li data-index="03" href=""><p>3</p></li>
					</ul>
					<div class="TabContent">
						<ul>
							<li>Tab 01</li>
							<li>Tab 02</li>
							<li>Tab 03</li>
						</ul>
					</div>
				</div>
			└── [Script]
				$.fn.tab(".TabContainer", ".TabContent ul", ".TabPager");
		*/
	};

	this.accordian = function(Container, Content, Button, TIME){
		TIME = TIME ? TIME : 300;
		$(Container + " " + Content).not(".active").hide();
		$(Container + " " + Button).on('click', function() {
			$(this).toggleClass('rotate');
			$(this).closest(Container).find(Content).first().slideToggle(TIME);
		});
		/* Usage
			└── [HTML]
				<div class="accContainer">
					<p class="accBtn"></p>
					<div class="accBlock">
						<div class="accContainer lv2">
							...
						</div>
					</div>
				</div>
			└── [Script]
				$.fn.accordian(".accContainer", ".accBlock", ".accBtn", "300");
		*/
	};

	this.fixedHeight = function(Container, Item) {
		if ( $(Item).length ) {
			function fixedHeight(){
				$(Item).css({"height" : ""});
				$(Container).each(function(){
					var h = 0;
					var item = $(this).find($(Item));
					item.each(function (){
						$(this).innerHeight() >= h ? h = $(this).innerHeight() : h;
					});
					item.innerHeight(h);
				});
			}
			$(window).on('resize', function(){
				fixedHeight();
			});
		}
	};

	// Initialization
    this.init = function(){
		this.tab(".TabContainer", ".TabContent > ul", ".TabPager");
		this.accordian(".accContainer", ".accBlock", ".accBtn");
		this.accordian(".menu_toggle .lv2", "ul", ".title", '300');
    	console.log('Initialization common scripts complete.');
    };
    this.init();
}

/*******************************************************************************************
*******************************************************************************************
*******************************************************************************************/


