// selfe invoking function bt5od parameter 2li hwa jq leeh b2a ? $ deh 25tsar bst5dmha 34n 2ndy 3la jq w bst5dm 2l function 34n 2b2a damn 2n $ btst5dm bs 34n 2l jqeyry
(function($){
	$(document).ready(function() {


		var searchToggle				 = $(".search_toggle"),
				searchFiled 			   = $(".search_field"),
				searchContainer 	   = $(".search_container"),
				searchCloseModel	   = $(".search_close_modal"),
				overlayGenericSearch = $(".overlay.generic.search"),
				searchResult				 = $(".search_results"),
				slideIndex = 1	;
		var arraydetials = [
					{
						nameTitle : "قرار جمهورى بالعفو عن باقى العقوبة لبعض السجناء بمناسبة عيد الأضحى",
						descripValue : "أصدر الرئيس عبد الفتاح السيسى القرار رقم 391 لسنة 2018 في شأن العفو عن باقي العقوبة لبعض المحكوم عليهم بمناسبة الاحتفال بعيد الأضحي المبارك الموافق العاشر من ذي الحجة لعام 1439 هجرية."
					},{
						nameTitle : "موجز أخبار 10 مساء.. الحكومة تنفى زيادة أسعار اللحوم",
						descripValue : "نشر اليوم السابع خلال الساعات الماضية عددا من الأخبار والتقارير المهمة منها: أعلن المركز الإعلامى لمجلس الوزراء، عن أنه فى ضوء ما تردد مم أنباء تُفيد بزيادة الحكومة أسعار اللحوم الطازجة."
					},{
						nameTitle : "البورصة تخسر 1.6 مليار جنيه خلال جلسات الأسبوع المنتهى بنسبة تراجع 0.2%",
						descripValue : "خسر رأس المال السوقى للبورصة المصرية نحو 1.6 مليار جنيه خلال جلسات الأسبوع المنتهى، ليغلق عند مستوى 856.399 مليار جنيه، بتراجع بنسبة 0.2% عن الأسبوع الماضى."
					},{
						nameTitle : "الصحة: ارتفاع حالات الوفاة بين الحجاج المصريين الى 19",
						descripValue : "أعلنت وزارة الصحة والسكان، مساء اليوم الأحد، عن وفاة حاجة من الحجاج المصريين بالأراضي السعودية، ليرتفع بذلك إجمالي حالات الوفاة الى 19."
					},{
						nameTitle : "اعرف قصة قرار بريتنى سبيرز بإنجاب طفل آخر بعد انتهائها من سلسلة حفلاتها",
						descripValue : "عمر 36 عاما، وذلك حسب موقع \"جوسيب كوب\" الذى استعان بأحد المقربين لبريتنى وأكد أن ما يتم تداوله ليس صحيحا."
					},{
						nameTitle : "لصحة: ارتفاع حالات الوفاة بين الحجاج المصريين الى ",
						descripValue : "عمر 36 عاما، وذلك حسب موقع \"جوسيب كوب\" الذى استعان بأحد المقربين لبريتنى وأكد أن ما يتم تداوله ليس صحيحا."
					},{
						nameTitle : "لصحة: ارتفاع حالات الوفاة بين الحجاج المصريين الى ",
						descripValue : "عمر 36 عاما، وذلك حسب موقع \"جوسيب كوب\" الذى استعان بأحد المقربين لبريتنى وأكد أن ما يتم تداوله ليس صحيحا."
					},{
						nameTitle : "لصحة: ارتفاع حالات الوفاة بين الحجاج المصريين الى ",
						descripValue : "عمر 36 عاما، وذلك حسب موقع \"جوسيب كوب\" الذى استعان بأحد المقربين لبريتنى وأكد أن ما يتم تداوله ليس صحيحا."
					}
				],
				BOTTOM_AREA = `
				<div class="bottomcontainer">
						<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 28 24" width="28" height="24">
							<style>tspan { white-space:pre }</style>
							<path class="shp0" id="Services-Manual-Icon" d="M24.86 22L24.86 3L26.86 3L26.86 1L1.86 1L1.86 3L3.86 3L3.86 22L0.86 22L0.86 24L27.86 24L27.86 22L24.86 22ZM14.2 17.32C13.39 17.32 12.9 18.25 12.96 18.74L12.86 19L12.86 22L5.86 22L5.86 3L22.86 3L22.86 22L15.86 22L15.86 19C15.86 18.23 15 17.32 14.2 17.32ZM17.86 15L20.86 15L20.86 18L17.86 18L17.86 15ZM17.86 10L20.86 10L20.86 13L17.86 13L17.86 10ZM17.86 5L20.86 5L20.86 8L17.86 8L17.86 5ZM12.86 10L15.86 10L15.86 13L12.86 13L12.86 10ZM12.86 5L15.86 5L15.86 8L12.86 8L12.86 5ZM7.86 15L10.86 15L10.86 18L7.86 18L7.86 15ZM7.86 10L10.86 10L10.86 13L7.86 13L7.86 10ZM7.86 5L10.86 5L10.86 8L7.86 8L7.86 5Z"></path>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 27 20" width="27" height="20">
							<style>
								tspan { white-space:pre }
							</style>
							<path class="shp0" id="Services-Electronic-Icon" d="M3.87,3h20l0,13h2v-14c0,-0.48 -0.5,-1 -1,-1h-22c-0.5,0 -1,0.52 -1,1l0,14h2zM14.87,18v1l-2,0v-1h-12l0,1c0,0.48 0.5,1 1,1h24c0.5,0 1,-0.52 1,-1v-1zM18.61,13.83l-2.21,-2.21l1.58,-0.91c0.12,-0.07 0.2,-0.21 0.18,-0.35c-0.01,-0.14 -0.1,-0.27 -0.23,-0.32l-7.03,-2.81c-0.14,-0.05 -0.3,-0.02 -0.4,0.08c-0.11,0.11 -0.14,0.26 -0.08,0.4l2.81,7.05c0.05,0.13 0.18,0.22 0.32,0.23c0.14,0.01 0.28,-0.06 0.35,-0.19l0.91,-1.58l2.21,2.22c0.07,0.07 0.16,0.11 0.26,0.11c0.1,0 0.19,-0.04 0.26,-0.11l1.08,-1.08c0.14,-0.15 0.14,-0.38 0,-0.53zM9.24,5.53c-0.14,-0.15 -0.38,-0.15 -0.53,0c-0.14,0.15 -0.14,0.38 0,0.53l0.83,0.83c0.07,0.07 0.17,0.11 0.26,0.11c0.09,0 0.19,-0.04 0.26,-0.11c0.14,-0.15 0.14,-0.38 0,-0.53zM9.52,8.1c0,-0.21 -0.17,-0.37 -0.37,-0.37h-1.17c-0.2,0 -0.37,0.17 -0.37,0.37c0,0.21 0.17,0.37 0.37,0.37h1.17c0.2,0 0.37,-0.17 0.37,-0.37zM9.37,9.25l-0.83,0.83c-0.15,0.14 -0.15,0.38 0,0.53c0.07,0.07 0.17,0.11 0.26,0.11c0.1,0 0.19,-0.04 0.26,-0.11l0.83,-0.83c0.15,-0.15 0.15,-0.38 0,-0.53c-0.14,-0.15 -0.38,-0.15 -0.53,0zM11.28,6.33c0.21,0 0.37,-0.17 0.37,-0.37v-1.17c0,-0.21 -0.17,-0.37 -0.37,-0.37c-0.21,0 -0.37,0.17 -0.37,0.37v1.17c0,0.21 0.17,0.37 0.37,0.37zM12.69,6.82c0.1,0 0.19,-0.04 0.26,-0.11l0.83,-0.83c0.15,-0.15 0.15,-0.38 0,-0.53c-0.14,-0.14 -0.38,-0.14 -0.53,0l-0.83,0.83c-0.15,0.15 -0.15,0.38 0,0.53c0.07,0.07 0.17,0.11 0.26,0.11z"></path>
						</svg><a href="#">إستفد من الخدمة</a>
				</div>
			`;
    var reversed = arraydetials.reverse();
		// search togglep
		searchToggle.click(function() {
				overlayGenericSearch.fadeIn('fast');
				searchContainer.fadeIn('fast');
				searchFiled.css({'margin-top':'0px'});
				searchCloseModel.css({'margin-top':'0px'});
				searchFiled.focus();
		});
		searchCloseModel.click(function(){
				searchFiled.css({'margin-top':'-200px'});
				searchCloseModel.css({'margin-top':'-200px'});
				overlayGenericSearch.fadeOut('fast');
				searchContainer.fadeOut('fast');
				searchFiled.val('');
				searchResult.empty();
		});

		// Tabs
		$('.tabs .tab-links a').on('click', function(e) {

			var currentAttrValue = $(this).attr('href');

			// Show/Hide Tabs
			$('.tabs ' + currentAttrValue).show().siblings().hide();

			// Change/remove current tab to active
			$(this).parent('li').addClass('active').siblings().removeClass('active');

			e.preventDefault();
		});

	// bottm
   var a;
   var countarr= arraydetials.length / 4;
   var countleng = arraydetials.length ;
   var count=0;




   for (i=0; i <countarr; i++) {

	    $('.SerciveList').append(`

			<li class="oneitem-${i+1} mySlides" id="itemNum-${i+1}" style="z-index:${i+1};">
			</li>
	    `);
		var tes=i+1;

	    for( var a=i*4; a < i*4+4 ; a++){

            if(a<=arraydetials.length){
				$('.oneitem-' + tes).append(`
					<div class="oneserviceitem" id="slide-${a+1}">
						<h1 id="titleNum-${count+1}"> ${arraydetials[a].nameTitle} </h1>
						<p class="parapgraph"> ${arraydetials[a].descripValue} </p>
						${BOTTOM_AREA}
					</div>
				`);


			}
			count++;

		}

   }

   var myparagraph = $('.parapgraph');
   myparagraph.text(myparagraph.text().substring(0,100));




//    var myparagraph = $('.yourp');
//    myparagraph.text(myparagraph.text().substring(0,20));
//    var mytitle = $('.yourt');
//    mytitle.text(mytitle.text().substring(0,10));










	 // arraylist1.forEach(function(arraylist1, i) {
	 //
	 // 				$('.oneitem').slice(0, 1).append(`
	 // 									<div class="oneserviceitem" id="slide-${i+1}">
	 // 											<h1> ${arraylist1.nameTitle} </h1>
	 // 											<p> ${arraylist1.descripValue} </p>
	 // 											${BOTTOM_AREA}
	 // 									</div>
	 // 		 			`);
	 //  });
	 // arraylist2.forEach(function(arraylist2, i) {
		// 			 $('.oneitem').slice(1).append(`
		// 								 <div class="oneserviceitem" id="slide-${i+1}">
		// 										 <h1> ${arraylist2.nameTitle} </h1>
		// 										 <p> ${arraylist2.descripValue} </p>
		// 										 ${BOTTOM_AREA}
		// 								 </div>
		// 				 `);
		// });




	});

})(jQuery);

//  toggle menu
function openNav() {


	$(".hamburger--minus").addClass("is-active");

	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	$(".hamburger--minus").removeClass("is-active");
	 document.getElementById("myNav").style.width = "0%";

}
