/**
 * Created by Praktikant.STTINSM on 07.07.2016.
 */
//alle

var u=0;//wird auf 1 gesetzt, wenn bereits jemand gewonnen hat
var h=9;//zählt die möglichen Spielzüge hinunter


/**
 * geht eine Ebene zurück
 */
function zurueck(){

    window.location="/Tic_Tac_Toe/views/modien_leicht.html";
}
//Neustart:
function Reset(){
    window.location=window.location;
}


/**
 * Wenn noch niemand gewonnen hat, und das Feld noch leer ist, wird es mit einem X beschrieben
 * und es wird com() aufgerufen
 */
$(function(){

    $('#lblWin').fadeOut(0);

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

            if            ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
                (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
                (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
                (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
                (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
                (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
                (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
                (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){
                setResult("Gewonnen!",true);



                u++;
            } else if((($("#a").val()=='O') && ($("#b").val()=='O') && ($("#c").val()=='O')) ||
                (($("#c").val()=='O') && ($("#f").val()=='O') && ($("#i").val()=='O')) ||
                (($("#i").val()=='O') && ($("#h").val()=='O') && ($("#g").val()=='O')) ||
                (($("#g").val()=='O') && ($("#d").val()=='O') && ($("#a").val()=='O')) ||
                (($("#d").val()=='O') && ($("#e").val()=='O') && ($("#f").val()=='O')) ||
                (($("#b").val()=='O') && ($("#e").val()=='O') && ($("#h").val()=='O')) ||
                (($("#c").val()=='O') && ($("#e").val()=='O') && ($("#g").val()=='O')) ||
                (($("#a").val()=='O') && ($("#e").val()=='O') && ($("#i").val()=='O'))){
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
 * generiert eine Random Zahl, die dann in eine id umgewandelt wird
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
     * überprüft, in dem Feld mit der id ein O oder X enthalten ist
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





