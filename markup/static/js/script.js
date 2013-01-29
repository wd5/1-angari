

var IndexSlider = function(){
    $('#index-slider').bxSlider({
            pager: false,
            nextSelector: '#index-slider-left',
            prevSelector: '#index-slider-right',
            nextText: '',
            prevText: ''
        });
}

var IndexUsecasesCategories = function(){
    
}

$(function(){
    IndexSlider();
});