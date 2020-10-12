$(document).ready(function(){
    // Deobfuscate email on click
    $('#my-email').each(function(i, el){
        el.onclick = function () {
            $(this).attr('href', $(this).attr('href').replaceAll(/\.idj.{3}eidk\./gi, ''));
        }
    });

    // fill background with prominent color of image
    const colorThief = new ColorThief();
    $('.bg-of-image').each(function(i, el){
        const img = $(el).find('img')[0];
        if (img) {
            const bg = colorThief.getColor(img);
            const col = bg.join(', ');
            $(el).css('background-color', 'rgba(' + bg.join(',') + ', 0.5)');
        }
    });

    // Open links in .my-content paragraphs in a new window
    $('.my-content p a').each(function(i, el){
        if (!$(el).hasClass('no-new-window')) {
            el.onclick = function () {
                window.open(this.href);
                return false;
            }
        }
    });
});
