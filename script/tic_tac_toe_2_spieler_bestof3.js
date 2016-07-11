/**
 * Created by Praktikant.STTINSM on 07.07.2016.
 */
//alle
var i=0;
var h=9;
var u=0;
var wp=0;
var wc=0;
/**
 * Geht eine Ebene zurück und setzt die wins und loses auf 0
 */
function zurueck(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/modien_2_spieler.html";
}
/**
 * resettet dei Seite
 * @constructor
 */
function Reset(){
    window.location=window.location;
}

$(function(){
    /**
     * wenn player oder pc NaN ist wird es mit 0 ersetzt
     */
    if (getCookie("player")=="NaN"){
        document.cookie="player=0";
    }
    if (getCookie("pc")=="NaN"){
        document.cookie="pc=0";
}
$("#playerpunkte").html(getCookie("player"));
    $("#pcpunkte").html(getCookie("pc"));
    $(':button.button').on('click',function(){
        /**
         * wenn noch keiner gewonnen hat und in dem Button noch nichts steht, dann wird er mit X oder O beschreiben
         */
        if (u==0){
            if ($(this).val()==""){
                if (i%2==0){
                    $(this).val("X");
                }else{

                    $(this).val("O");
                }
                i++;
                h--;

            }

            //Gewinnabfrage************************************************************
            if((($("#a").val()=='O') && ($("#b").val()=='O') && ($("#c").val()=='O')) ||
                (($("#c").val()=='O') && ($("#f").val()=='O') && ($("#i").val()=='O')) ||
                (($("#i").val()=='O') && ($("#h").val()=='O') && ($("#g").val()=='O')) ||
                (($("#g").val()=='O') && ($("#d").val()=='O') && ($("#a").val()=='O')) ||
                (($("#d").val()=='O') && ($("#e").val()=='O') && ($("#f").val()=='O')) ||
                (($("#b").val()=='O') && ($("#e").val()=='O') && ($("#h").val()=='O')) ||
                (($("#c").val()=='O') && ($("#e").val()=='O') && ($("#g").val()=='O')) ||
                (($("#a").val()=='O') && ($("#e").val()=='O') && ($("#i").val()=='O'))){
                setResult("O hat gewonnen!",true);
                setwins("pc");
                u++;
            } else if((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
                (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
                (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
                (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
                (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
                (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
                (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
                (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){

                setResult("X hat gewonnen!",true);
                setwins("player");

                u++;
            }
            if (h==0&& u==0){
                setResult("Unentschieden!",true);
            }
        }
    });


});


/**
 * lässt eine Ergebnis Ausgabe erscheinen und resettet die Seite
 * @param text
 * @param reset
 */
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
 *hohlt cookie vom container
 * @param name
 * @returns {T}
 */
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

/**
 * setzt die wins
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
 * Überprüft, wer gewonnen hat, setzt die wins und loses auf 0, geht zurück zu den Modien
 * @param wp
 * @param wc
 */
function gewonnen( wp, wc){
    if(wp >= 2 || wc >= 2){
        document.cookie="player=0";
        document.cookie="pc=0";
        if(wp>wc){
            alert("win");
            window.location="/Tic_Tac_Toe/views/modien_2_spieler.html";
        }else
            alert("lose");
        window.location="/Tic_Tac_Toe/views/modien_2_spieler.html";
    }



}
