/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/**
 * Created by Praktikant.STTINSM on 07.07.2016.
 */
//alle

var u=0;
var h=9;
var wc=0; //Wins vom Computer
var wp=0; // Wins vom Spieler (player)
function zurueck(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/modien_leicht.html";
}
//Neustart:
function Reset(){
    window.location=window.location;
}
/**
 * Wenn in Player oder in pc NaN steht, wird es mit 0 beschrieben
 */
$(function(){
    if (getCookie("player")=="NaN"){
        document.cookie="player=0";
    }
    if (getCookie("pc")=="NaN"){
        document.cookie="pc=0";
    }
    $("#playerpunkte").html(getCookie("player"));
    $("#pcpunkte").html(getCookie("pc"));
    $('#lblWin').fadeOut(0);

    /**
     * Wenn noch niemand gewonnen hat, und in diesem Feld noch nichts steht, wird es mit einem X beschrieben
     * und es wird com()aufgerufen
     */
    $(':button.button').on('click',function(){
        if (u==0){


            if ($(this).val()==""){

                $(this).val("X");
                if (h>1){
                    com();
                }


                h--;
            }


            //Gewinnabfrage************************************************************

            if  ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
                (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
                (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
                (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
                (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
                (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
                (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
                (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){
                setwins("player");
                setResult("Gewonnen!",true);


                u++;
                //Gewinnabfrage************************************************************

                u++;
            } else if((($("#a").val()=='O') && ($("#b").val()=='O') && ($("#c").val()=='O')) ||
                (($("#c").val()=='O') && ($("#f").val()=='O') && ($("#i").val()=='O')) ||
                (($("#i").val()=='O') && ($("#h").val()=='O') && ($("#g").val()=='O')) ||
                (($("#g").val()=='O') && ($("#d").val()=='O') && ($("#a").val()=='O')) ||
                (($("#d").val()=='O') && ($("#e").val()=='O') && ($("#f").val()=='O')) ||
                (($("#b").val()=='O') && ($("#e").val()=='O') && ($("#h").val()=='O')) ||
                (($("#c").val()=='O') && ($("#e").val()=='O') && ($("#g").val()=='O')) ||
                (($("#a").val()=='O') && ($("#e").val()=='O') && ($("#i").val()=='O'))){
                setwins("pc");
                setResult("Verloren!",true);


                u++;
            }
            if (h==0&& u==0){
                setResult("Unentschieden!",true);
            }
        }
    });


});


var setResult = function(text,reset=false){


    $('#lblWin').html(text).fadeIn(1000,function(){
        $(this).fadeOut(2500,function(){
            if(reset==true){
                Reset();
            }
        });

    });
};

/**
 * hohlt wert aus dem cookie-container
 * @param name
 * @returns {T}
 */
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
/**
 * erhöht,wenn gewonnen
 * @param player
 */
function setwins(player){
    var wc=getCookie(player);
    var wp=getCookie(player);
    if (player=="pc"){

        wc++;
        document.cookie=player+"="+wc;
    }
    else {
        wp++;
        document.cookie=player+"="+wp;
    }
    gewonnen(wp,wc);

}
function getmatch(){
    return getCookie("match");
}
/**
 * hohlt die wins
 * @param player
 * @returns {T}
 */
function getwins(player){
    return getCookie(player);
}

/**
 * prüft, wer gewonnen hat, und setzt die wins und loses auf 0 und geht eine Ebene zurück
 * @param wp
 * @param wc
 */
function gewonnen( wp, wc){
    if(wp >= 3 || wc >= 3){
        document.cookie="player=0";
        document.cookie="pc=0";
        if(wp>wc){
            alert("win");
            window.location="/Tic_Tac_Toe/views/modien_leicht.html";
        }else
            alert("lose");
        window.location="/Tic_Tac_Toe/views/modien_leicht.html";

    }



}

/**
 * generiert eine Random Zahl, die in eine id umgewandelt wird
 * @returns {*}
 */
function random(){
    var id;
    var min = 0;
    var max = 8;
    var x = parseInt((Math.random() * (max - min)) + min) ;

//*****************************************************

    //aus 0 wird a usw...
    switch (x){
        case 0:
            id = "a";
            break;
        case 1:
            id = "b";
            break;
        case 2:
            id = "c";
            break;
        case 3:
            id = "d";
            break;
        case 4:
            id = "e";
            break;
        case 5:
            id = "f";
            break;
        case 6:
            id = "g";
            break;

        case 7:
            id ="h";
            break;
        case 8:
            id ="i";
            break;

    }
    return id;
}


/**
 * setzt ein O
 */
function com(){
    var id=random();
    while (ueberpruefe(id)){
        id = random();
    }
    if (h>1){
        if  ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
            (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
            (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
            (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
            (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
            (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
            (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
            (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){
            setResult("Gewonnen!",true);
            u++;
        }
        if (u==0){
            console.log($("#"+id).val("O"));
            h--;

        }

    }

    /**
     * schaut, ob das Feld mit der übergebenen id bereits beschrieben ist
     * @param id
     * @returns {number}
     */
    function ueberpruefe(id){
        if ($("#"+id).val()==""){
            return 0;
        }else {
            return 1;
        }

    }
}



