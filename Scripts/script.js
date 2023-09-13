for (let i = 0; i <= document.getElementsByTagName('aside')[0].getElementsByTagName('li').length - 1; i++) {
    document.getElementsByTagName('aside')[0].getElementsByTagName('li')[i].addEventListener('click', function () { DoesItCurrent(this.id) });
}

let asideWidth = document.querySelector('aside').offsetWidth
document.querySelector('body').style.marginRight=asideWidth+'px'


window.addEventListener('resize', function(event) {
    let asideWidth = document.querySelector('aside').offsetWidth
    document.querySelector('body').style.marginRight=asideWidth+'px'

}, true);

$(document).scroll(function (e) {

    id = 'h1';
    for (let i = 1; i <= 6; i++) {
        var current_top = $(this).scrollTop() + 1;
        $(document.getElementById(i)).each(function () {
            if
                (
                $(this).position().top <= current_top && $(this).position().top + $(this).outerHeight() >= current_top
            ) {
                document.getElementById(id).classList.add("current-theme");
            }
            else {
                document.getElementById(id).classList.remove("current-theme");
            }
        });
        id = id.replace('h', '');
        id++;
        id = 'h' + id;
    }
});




function DoesItCurrent(paramId) {
    var id = paramId;
    id = id.replace('h', '');
    const pNum = id;
    const scrollTarget = document.getElementById(pNum);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition;

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
    });
}




setTimeout(function()
{
    $('body').addClass('body_visible');
}, 10);