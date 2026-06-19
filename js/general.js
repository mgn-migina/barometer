var window_size     = $(window).width(),
    header_point;
const menuBtn       = $('.manu-toggler'),
      menuTarget    = menuBtn.data('target'),
      menuObj       = $('#' + menuTarget),
      animateTime   = 300,
      mobile_point  = 900;

if ($('header').hasClass('size-lg')) {
    header_point = 480;
} else {
    header_point = 280;
}

$('a[href^="#"]').click(function() {
    var href        = $(this).attr('href'),
        target      = $(href == "#" || href == "" ? 'html' : href),
        position    = target.offset().top;

    $('body,html').animate({scrollTop:position}, animateTime, 'swing');
    return false;
});

scrollMenu($(window).scrollTop() > header_point)

$(window).on('resize', function() {
    window_size = $(window).width();
    if (mobile_point < window_size) {
        if (menuBtn.data('open') == false) {
            openMenu(false);
        }
        menuObj.show();
    } else {
        if (menuBtn.data('open') == true) {
            openMenu(true);
        }
        menuObj.hide();
    }
});

$(window).on('scroll', function() {
    if (window_size > mobile_point) {
        scrollMenu($(this).scrollTop() > header_point)
    }
});

menuObj.find('a').on('click', function() {
    if (window_size <= mobile_point) {
        openMenu(true);
    } else {
        openMenu(false);
    }
});

$('#pageTop').on('click', function () {
    scrollPosition(0);
});

$('.manu-toggler').on('click', function() {
    openMenu($(this).data('open'));
});

function scrollPosition(position) {
    $('body,html').animate({
        scrollTop: position
    });
}

function openMenu(is_open) {
    if (!is_open) {
        menuBtn.data('open', true);
        menuObj.slideDown(animateTime);
        menuBtn.addClass('open');
    } else {
        menuBtn.data('open', false);
        menuObj.slideUp(animateTime);
        menuBtn.removeClass('open');
    }
}

function scrollMenu(is_scroll) {
    if (is_scroll) {
        menuObj.addClass('scroll');
    } else {
        menuObj.removeClass('scroll');
    }
}
// =========================
// 画像クリックで拡大
// =========================

window.addEventListener("DOMContentLoaded", function() {
    // 画面のHTMLがすべて読み込まれてから、以下の処理を実行する

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    const closeBtn = document.getElementById("close");

    document.querySelectorAll(".zoom-image").forEach(function(img){
        img.addEventListener("click", function(){
            modal.style.display = "flex";
            modalImg.src = this.src;
            caption.textContent = this.dataset.caption;
        });
    });

    closeBtn.onclick = function(){
        modal.style.display = "none";
    };

    modal.onclick = function(e){
        if(e.target === modal){
            modal.style.display = "none";
        }
    };
});