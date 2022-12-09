// JavaScript Document
$(function(){
	$('.fade').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInUp');
    } else {
    //表示領域から出た時
      //$(this).removeClass('fadeInDown');
     //$(this).css('opacity',0); //非表示にしておく
    }
	});
});

/*メインコンテンツfadein*/
$(function(){
	$('.fade2').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
	　$(this).addClass('fadeInUp');
    } else {
    //表示領域から出た時
      //$(this).removeClass('fadeInUp');
      //$(this).css('opacity',0); //非表示にしておく
    }
	});
});

$(function(){
	$('.fade3').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInUp');
    } else {
    //表示領域から出た時
      //$(this).removeClass('fadeInUp');
      //$(this).css('opacity',0); //非表示にしておく
    }
	});
});

$(function(){
	$('.fade4').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInUp');
    } else {
    //表示領域から出た時
      //$(this).removeClass('fadeInUp');
      //$(this).css('opacity',0); //非表示にしておく
    }
	});
});

$(function(){
	$('.fade5').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInUp');
    } else {
    //表示領域から出た時
      //$(this).removeClass('fadeInUp');
      //$(this).css('opacity',0); //非表示にしておく
    }
	});
});

/*------------view more----------------*/
$(function(){
	$('.more1').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('rubberBand');
    } else {
    //表示領域から出た時
      $(this).removeClass('fadeInUp');
      $(this).css('opacity',100); //非表示にしておく
    }
	});
});

$(function(){
	$('.more2').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('rubberBand');
    } else {
    //表示領域から出た時
      $(this).removeClass('fadeInUp');
      $(this).css('opacity',100); //非表示にしておく
    }
	});
});
$(function(){
	$('.more3').on('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('rubberBand');
    } else {
    //表示領域から出た時
      $(this).removeClass('fadeInUp');
      $(this).css('opacity',100); //非表示にしておく
    }
	});
});