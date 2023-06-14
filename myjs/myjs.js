function App(){}

    window.onload = function (event){
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event){
        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselWidth = carrusel[0].offsetWidth;
        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition,trackWidth, listWidth, carruselWidth, track);



    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if(leftPosition > 0 ){
            track.style.left = `${-1 *(leftPosition - carruselWidth)}px`;
        }
    }

    let nextAction = (leftPosition,trackWidth,listWidth,carruselWidth,track) => {

        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 *(leftPosition + carruselWidth)}px`;
        }
    }

    // efecto de la imagen en el formulario
    
    const el = document.getElementById('poster');
    const height = el.clientHeight;
    const width = el.clientWidth;

    el.addEventListener('mousemove', (evt) => {
        const {layerX, layerY} = evt

        const yRotation = (
            (layerX - width / 2) / width
        ) * 20

        const xRotation = (
            (layerY - height / 2) / height
        ) * 20

        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`

        el.style.transform = string

    });

    el.addEventListener('mouseout' , () => {
        el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
    })

