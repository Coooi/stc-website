if (document.querySelector('#clients-page')){
    $('.navbar-right a').css('color', '#000');

    var wall = new freewall('.clients-mosaic');
            wall.reset({
                selector: '.item',
                animate: true,
                cellW: 20,
                cellH: 200,
                gutterX: 100,
                gutterY: 30,
                onResize: function() {
                    wall.fitWidth();
                }
            });
            wall.fitWidth();
            // for scroll bar appear;
            $(window).trigger("resize");
}

