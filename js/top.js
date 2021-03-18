
$(function(){
    window.onload = function() {
        scroll_effect();
      
        $(window).scroll(function(){
         scroll_effect();
        });
      
        function scroll_effect(){
         $('.fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
           $(this).addClass('effect-scroll');
          }
         });
        }
      };

    $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

    $('btn-c').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top-100;//idの上部の距離からHeaderの高さを引いた値を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
    });


    $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
		speed: 500,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		centerMode: true,//要素を中央ぞろえにする
        centerPadding: '100px',

        responsive: [ // ブレイクポイントごとに設定を変更
            {
                breakpoint: 1039,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30px',

                }
            }

        ]

	});

    $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
        $('.slider').slick('slickPlay');
    });

    $('.send').prop("disabled", true);

    $(document).ready(function () {

        const $submitBtn = $('.send')
        $('#form input,#form textarea').on('change', function () {
          if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            // $('#form input[type="checkbox"]').val() !== "" &&
            $('#form #check').prop('checked') === true
          ) {
            $submitBtn.prop('disabled', false);
      
          } else {
            $submitBtn.prop('disabled', true);
          }
        });
      
      });

      //アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	// if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
	// 	$(this).removeClass('close');//クラス名を除去し
	// }else{//それ以外は
	// 	$(this).addClass('close');//クラス名closeを付与
	// }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area .first').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		// $(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});

$(".burger").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".nav").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
    $(".burger-btn").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
    $(".nav-wrap").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与


});

$(".nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".burger").removeClass('active');//ボタンの activeクラスを除去し
    $(".nav").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
    $(".burger-btn").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
    $(".nav-wrap").removeClass('active');//ナビゲーションのpanelactiveクラスも除去


});
  
});