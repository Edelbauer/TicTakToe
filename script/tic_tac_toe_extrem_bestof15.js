/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/*
 * Created by Praktikant.STTINSM on 07.07.2016.
 */








var u=0;
var h=9;
var wc;
var wp;
function zurueck(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/modien_extrem.html";
}
//Neustart:
function Reset(){
    window.location=window.location;
}

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

    $(':button.button').on('click',function(){
        if (u==0){


            if ($(this).val()==""){

                $(this).val("X");
                if (h>1){
                    com();
                }


                h--;
            }

            if  ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X')) ||
                (($("#c").val()=='X') && ($("#f").val()=='X') && ($("#i").val()=='X')) ||
                (($("#i").val()=='X') && ($("#h").val()=='X') && ($("#g").val()=='X')) ||
                (($("#g").val()=='X') && ($("#d").val()=='X') && ($("#a").val()=='X')) ||
                (($("#d").val()=='X') && ($("#e").val()=='X') && ($("#f").val()=='X')) ||
                (($("#b").val()=='X') && ($("#e").val()=='X') && ($("#h").val()=='X')) ||
                (($("#c").val()=='X') && ($("#e").val()=='X') && ($("#g").val()=='X')) ||
                (($("#a").val()=='X') && ($("#e").val()=='X') && ($("#i").val()=='X'))){
                setResult("Gewonnen!",true);
                setwins("player");
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
                setResult("Verloren!",true);
                setwins("pc");

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


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
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

function getwins(player){
    return getCookie(player);
}


function gewonnen( wp, wc){
    if(wp >= 8 || wc >= 8){
        document.cookie="player=0";
        document.cookie="pc=0";
        if(wp>wc){
            alert("win");
            window.location="/Tic_Tac_Toe/views/modien_extrem.html";
        }else
            alert("lose");
        window.location="/Tic_Tac_Toe/views/modien_extrem.html";

    }



}


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


    //KIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKI

    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF
    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF
    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF
    //waagrecht**********************************************************************
    //erste reihe
    if ($("#a").val()=="X"&& $("#b").val()=="X"&& $("#c").val()==""){
        id = "c";
    }
    if ($("#c").val()=="X"&& $("#b").val()=="X" && $("#a").val()==""){
        id= "a";
    }
    if ($("#a").val()=="X" && $("#b").val()=="" && $("#c").val()=="X"){
        id = "b";
    }
    //zweite reihe
    if ($("#d").val()=="X"&& $("#e").val()=="X"&& $("#f").val()==""){
        id = "f";
    }
    if ($("#d").val()=="X"&& $("#e").val()==""&& $("#f").val()=="X"){
        id = "e";
    }
    if ($("#d").val()==""&& $("#e").val()=="X"&& $("#f").val()=="X"){
        id = "d";
    }
    //dritte reihe
    if ($("#g").val()=="X"&& $("#h").val()=="X"&& $("#i").val()==""){
        id = "i";
    }
    if ($("#g").val()=="X"&& $("#h").val()==""&& $("#i").val()=="X"){
        id = "h";
    }
    if ($("#g").val()==""&& $("#h").val()=="X"&& $("#i").val()=="X"){
        id = "g";
    }
    //waagrecht********************************************************************************


    //senkrecht*****************************************************************************
    //erste spalte

    if ($("#a").val()=="X"&& $("#d").val()=="X"&& $("#g").val()==""){
        id = "g";
    }
    if ($("#a").val()=="X"&& $("#d").val()==""&& $("#g").val()=="X"){
        id =  "d";
    }
    if ($("#a").val()==""&& $("#d").val()=="X"&& $("#g").val()=="X"){
        id =  "a";
    }
    //zweite spalte
    if ($("#b").val()=="X"&& $("#e").val()=="X"&& $("#h").val()==""){
        id = "h";

    }
    if ($("#b").val()=="X"&& $("#e").val()==""&& $("#h").val()=="X"){
        id = "e";

    }
    if ($("#b").val()==""&& $("#e").val()=="X"&& $("#h").val()=="X"){
        id = "b";

    }
    //dritte spalte
    if ($("#c").val()=="X"&& $("#f").val()=="X"&& $("#i").val()==""){
        id = "i";

    }
    if ($("#c").val()=="X"&& $("#f").val()==""&& $("#i").val()=="X"){
        id = "f";

    }
    if ($("#c").val()==""&& $("#f").val()=="X"&& $("#i").val()=="X"){
        id = "c";

    }
    //senkrecht**************************************************************************

    //schräg***********************************************************************
    //von links oben nach rechts unten
    if ($("#a").val()=="X"&& $("#e").val()=="X"&& $("#i").val()==""){
        id = "i";

    }
    if ($("#a").val()=="X"&& $("#e").val()==""&& $("#i").val()=="X"){
        id ="e";

    }
    if ($("#a").val()==""&& $("#e").val()=="X"&& $("#i").val()=="X"){
        id = "a";

    }
    //von rechts oben nach links unten

    if ($("#c").val()=="X"&& $("#e").val()=="X"&& $("#g").val()==""){
        id = "g";

    }
    if ($("#c").val()=="X"&& $("#e").val()==""&& $("#g").val()=="X"){
        id = "e";

    }
    if ($("#c").val()==""&& $("#e").val()=="X"&& $("#g").val()=="X"){
        id = "c";

    }
    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF
    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF
    //DEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEFDEF



    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC
    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC
    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC

    //waagrecht**********************************************************************
    //erste reihe
    if ($("#a").val()=="O"&& $("#b").val()=="O"&& $("#c").val()==""){
        id = "c";
    }
    if ($("#c").val()=="O"&& $("#b").val()=="O" && $("#a").val()==""){
        id= "a";
    }
    if ($("#a").val()=="O" && $("#b").val()=="" && $("#c").val()=="O"){
        id = "b";
    }
    //zweite reihe
    if ($("#d").val()=="O"&& $("#e").val()=="O"&& $("#f").val()==""){
        id = "f";
    }
    if ($("#d").val()=="O"&& $("#e").val()==""&& $("#f").val()=="O"){
        id = "e";
    }
    if ($("#d").val()==""&& $("#e").val()=="O"&& $("#f").val()=="O"){
        id = "d";
    }
    //dritte reihe
    if ($("#g").val()=="O"&& $("#h").val()=="O"&& $("#i").val()==""){
        id = "i";
    }
    if ($("#g").val()=="O"&& $("#h").val()==""&& $("#i").val()=="O"){
        id = "h";
    }
    if ($("#g").val()==""&& $("#h").val()=="O"&& $("#i").val()=="O"){
        id = "g";
    }
    //waagrecht********************************************************************************


    //senkrecht*****************************************************************************
    //erste spalte

    if ($("#a").val()=="O"&& $("#d").val()=="O"&& $("#g").val()==""){
        id = "g";
    }
    if ($("#a").val()=="O"&& $("#d").val()==""&& $("#g").val()=="O"){
        id =  "d";
    }
    if ($("#a").val()==""&& $("#d").val()=="O"&& $("#g").val()=="O"){
        id =  "a";
    }
    //zweite spalte
    if ($("#b").val()=="O"&& $("#e").val()=="O"&& $("#h").val()==""){
        id = "h";

    }
    if ($("#b").val()=="O"&& $("#e").val()==""&& $("#h").val()=="O"){
        id = "e";

    }
    if ($("#b").val()==""&& $("#e").val()=="O"&& $("#h").val()=="O"){
        id = "b";

    }
    //dritte spalte
    if ($("#c").val()=="O"&& $("#f").val()=="O"&& $("#i").val()==""){
        id = "i";

    }
    if ($("#c").val()=="O"&& $("#f").val()==""&& $("#i").val()=="O"){
        id = "f";

    }
    if ($("#c").val()==""&& $("#f").val()=="O"&& $("#i").val()=="O"){
        id = "c";

    }
    //senkrecht**************************************************************************

    //schräg***********************************************************************
    //von links oben nach rechts unten
    if ($("#a").val()=="O"&& $("#e").val()=="O"&& $("#i").val()==""){
        id = "i";

    }
    if ($("#a").val()=="O"&& $("#e").val()==""&& $("#i").val()=="O"){
        id ="e";

    }
    if ($("#a").val()==""&& $("#e").val()=="O"&& $("#i").val()=="O"){
        id = "a";

    }
    //von rechts oben nach links unten

    if ($("#c").val()=="O"&& $("#e").val()=="O"&& $("#g").val()==""){
        id = "g";

    }
    if ($("#c").val()=="O"&& $("#e").val()==""&& $("#g").val()=="O"){
        id = "e";

    }
    if ($("#c").val()==""&& $("#e").val()=="O"&& $("#g").val()=="O"){
        id = "c";

    }

    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC
    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC
    //ATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTACATTAC





    //KIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIKIK






    return id;
}



function com(){
    var id=random();
    while (ueberpruefe(id)){
        id = random();
    }
    if (h>1){
        if  ((($("#a").val()=='X') && ($("#b").val()=='X') && ($("#c").val()=='X'))||
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


    function ueberpruefe(id){
        if ($("#"+id).val()==""){
            return 0;
        }else {
            return 1;
        }

    }
}






