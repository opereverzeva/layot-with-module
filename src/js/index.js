import createTicker from './Ticker'

// $('#myform')[0].reset();
// turn on feedback




$('.contact__feedback').click(function (event) {
    event.preventDefault();
    $('.overlay').fadeIn(400, function () {
        // $('body').addClass('modal-window');
        $(".modal").fadeIn(400, function () {});
    })

});

//turn off feedback

$('.window__close, .overlay').click(function () {
    $('.modal').fadeOut(400, function () {
        // $('body').addClass('modal-window');
        $(".overlay").fadeOut(400);
    })

})

//clear form

$('.feedback__button').click(function name(params) {
    $(".feedback__form").trigger('reset');
})


var slide_obj = $('.slide');
var slide_array = $.makeArray(slide_obj);
var array_length = slide_array.length;
console.log(slide_array, array_length);

function searchActiveImage(array) {
    for (let i = 0; i < array.length; i++) {
        if ($(array[i]).hasClass('slide_active')) {
            var numberActiveImage = i;
        }
    }
    return numberActiveImage;

}
console.log(searchActiveImage(slide_array))

function checkId(item) {
    return item >= array_length ?
        item = 0 :
        (item < 0 ?
            item = array_length - 1 :
            item)
}

function swapPage(nextDelta) {
    let currentIdImage = searchActiveImage(slide_array);
    let nextIdImage = checkId((currentIdImage + nextDelta));
    $('.slide_active').removeClass('slide_active')
    $('.slide').eq(nextIdImage).addClass('slide_active')
}


$('.slider__button').click(function (event) {
    swapPage($(event.target).hasClass('slider__pre') ? -1 : 1)
})

// function workSlider() {

//     setTimeout(func / code, 4000)

// }

function changeImage() {
    for (let i = 0; i < slide_array.length; i++) {
        // setTimeout(function (i) {
        //     $(slide_array[i]).removeClass('slide_active')
        //     $(slide_array[checkId(i + 1)]).addClass('slide_active')
        // }, 4000)
        // if (i == (slide_array.length - 1)) {
        //     i = 0
        // }

    }


}
// changeImage();

// var timerId = setTimeout(func / code, delay[, arg1, arg2...])

const ticker = createTicker(function () {
    swapPage(1)
}, 4000)

$('.slider__button').on('mouseover', () => {
    ticker.stop()
})

$('.slider__button').on('mouseout', () => {
    ticker.start()
})