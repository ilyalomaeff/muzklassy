$(document).ready(function() {
    function loadData() {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 2000);
        })
    }
    loadData()
        .then(() => {
          let preloaderEl = document.getElementById('preloader');
          preloaderEl.classList.add('hidden');
          preloaderEl.classList.remove('visible');
          let El = document.getElementById('section1');
          El.classList.add('animate');
    });
    $('#scroll').pagepiling({
        navigation: null,
        sectionsColor: ["#fff", "#fff"],
        verticalCentered: false
    });
    // function firstScreenAnim() {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(resolve, 2000);
    //     })
    // }
    // firstScreenAnim()
    //     .then(() => {
    //       let El = document.getElementById('nav-first');
    //       El.classList.add('animate');
    // });
});

$('.matryoshka-big path').on('mouseenter', function() {
    $('.matryoshka').addClass('bigHover');
    $('.matryoshka-table').addClass('bigHover');
});
$('.matryoshka-big path').on('mouseleave', function() {
    $('.matryoshka').removeClass('bigHover');
    $('.matryoshka-table').removeClass('bigHover');
});

$('.matryoshka-middle path').on('mouseenter', function() {
    $('.matryoshka').addClass('middleHover');
    $('.matryoshka-table').addClass('middleHover');
});
$('.matryoshka-middle path').on('mouseleave', function() {
    $('.matryoshka').removeClass('middleHover');
    $('.matryoshka-table').removeClass('middleHover');
});

$('.matryoshka-small path').on('mouseenter', function() {
    $('.matryoshka').addClass('smallHover');
    $('.matryoshka-table').addClass('smallHover');
});
$('.matryoshka-small path').on('mouseleave', function() {
    $('.matryoshka').removeClass('smallHover');
    $('.matryoshka-table').removeClass('smallHover');
});

$('.ufo').on('mouseenter', function() {
    $('.card').addClass('ufoHover');
});
$('.ufo').on('mouseleave', function() {
    $('.card').removeClass('ufoHover');
});

$('.card path').on('mouseenter', function() {
    $('.map-table').addClass('hovered');
});
$('.card path').on('mouseleave', function() {
    $('.map-table').removeClass('hovered');
});

$('.pfo').on('mouseenter', function() {
    $('.map-table__pfo').addClass('active');
});
$('.pfo').on('mouseleave', function() {
    $('.map-table__pfo').removeClass('active');
});

$('.cfo').on('mouseenter', function() {
    $('.map-table__cfo').addClass('active');
});
$('.cfo').on('mouseleave', function() {
    $('.map-table__cfo').removeClass('active');
});

$('.szfo').on('mouseenter', function() {
    $('.map-table__szfo').addClass('active');
});
$('.szfo').on('mouseleave', function() {
    $('.map-table__szfo').removeClass('active');
});

$('.uralfo').on('mouseenter', function() {
    $('.map-table__uralfo').addClass('active');
});
$('.uralfo').on('mouseleave', function() {
    $('.map-table__uralfo').removeClass('active');
});

$('.dvfo').on('mouseenter', function() {
    $('.map-table__dvfo').addClass('active');
});
$('.dvfo').on('mouseleave', function() {
    $('.map-table__dvfo').removeClass('active');
});

$('.sfo').on('mouseenter', function() {
    $('.map-table__sfo').addClass('active');
});
$('.sfo').on('mouseleave', function() {
    $('.map-table__sfo').removeClass('active');
});

$('.ufo').on('mouseenter', function() {
    $('.map-table__ufo').addClass('active');
});
$('.ufo').on('mouseleave', function() {
    $('.map-table__ufo').removeClass('active');
});

$('.skfo').on('mouseenter', function() {
    $('.map-table__skfo').addClass('active');
});
$('.skfo').on('mouseleave', function() {
    $('.map-table__skfo').removeClass('active');
});