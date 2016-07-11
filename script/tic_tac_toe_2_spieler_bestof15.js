/**
 * Created by Praktikant.STTINSM on 07.07.2016.
 */
//alle
var i=0;//setzt abwechselnd X ubndb O in die Felder
var h=9;//zählt die möglichen Spielzüge hinunter
var u=0;//wird auf 1 gesetzt, wenn schon jemand gewonnen hat
var wp=0;//wins vom Spieler
var wc=0;//wins vom Computer


/**
 * Geht eine Ebene zurück, setzt die wins und loses auf 0
 */
function zurueck(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/modien_2_spieler.html";
}
//resettet die Seite
function Reset(){
    window.location=window.location;
}

$(function(){
    //Wenn in player oder in pc NaN steht, wird es mit 0 überschreiben
    if (getCookie("player")=="NaN"){
        document.cookie="player=0";
    }
    if (getCookie("pc")=="NaN"){
        document.cookie="pc=0";
    }
    $("#playerpunkte").html(getCookie("player"));
    $("#pcpunkte").html(getCookie("pc"));
    $(':button.button').on('click',function(){
        //wenn noch keiner gewonnen hat, und das Feld noch leer ist, wird es mit X oder O beschrieben
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
                setwins("player");
                u++;
            } else if            ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
                (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
                (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
                (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
                (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
                (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
                (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
                (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){

                setResult("X hat gewonnen!",true);
                setwins("pc");
                u++;
            }
            //Wenn noch keiner géwonnen hat, und wenn alle Spielzüge verbraucht sind, ist unentschieden
            if (h==0&& u==0){
                setResult("Unentschieden!",true);
            }
        }
    });


});


/**
 * Gibt das Resultat aus, ruft reset() auf
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
 * hohlt cookie vom container
 * @param name
 * @returns {T}
 */
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
//erhöht wenn win
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
 * Wenn jemand 8 Siege erreicht hat, wird player und pc auf 0 gesetzt und es werdedn die Mehrspieler-Modien aufgerufen
 * @param wp
 * @param wc
 */
function gewonnen( wp, wc){
    if(wp >= 8 || wc >= 8){
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
