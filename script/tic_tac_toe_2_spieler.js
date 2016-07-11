/**
 * Created by Praktikant.STTINSM on 07.07.2016.
 */

var i=0;//setzt abwechselnd X und O in die Buttons

var h=9;//zählt die Spielzüge
var u=0;//schaut ob schon jemand gewonnen hat
function zurueck(){
    window.location="/Tic_Tac_Toe/views/modien_2_spieler.html";


}


/**
 * resettet die Seite
 * @constructor
 */
function Reset(){
    window.location=window.location;
}

$(function(){

    $(':button.button').on('click',function(){
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
                u++;
            }
            //wenn alle Spielzüge verbraucht sind und noch keiner gewonnen hat
            if (h==0&& u==0){
                setResult("Unentschieden!",true);
            }
        }
    });


});


/**
 * Lässt eine Gewinn/Verlust/Unentschieden Ausgabe erscheinen und resettet die Seite
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

