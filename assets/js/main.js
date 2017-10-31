var carousel = new Carousel({
    elem: 'carousel', // id of the carousel container
    autoplay: true, // starts the rotation automatically
    infinite: true, // enables infinite mode
    interval: 5000, // interval between slide changes
    initial: 0, // slide to start with
    dots: true, // show navigation dots
    arrows: true, // show navigation arrows
    buttons: false,
    btnStopText: 'Pause'
});

// Show the 3rd slide (Numeration of slides starts at 0)
carousel.show(2);

// Move to the next slide
carousel.next();