
$(function(){
    var dbStyle = document.body.style,
        backgnd = [
            "url('/assets/skyrim_rolem.jpg')",
            "url('/assets/bg-texture.png')"
        ];

    function setBG() {
        if (document.URL.match(/productos$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]

        }
        else if (document.URL.match(/productos\/volcano$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/productos\/prodigy$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/productos\/optimus$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/productos\/force$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/productos\/elemento$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/compania$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/noticias$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/comprar$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/contacto$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/por_que_pc$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/users\/new$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else if (document.URL.match(/blog$/)) {
            dbStyle.backgroundImage = backgnd[ 1 ]
        }
        else {
            dbStyle.backgroundImage = backgnd[ 0 ]
        }

    }

    setBG();
});