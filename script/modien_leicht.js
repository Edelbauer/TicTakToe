/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */

/**
 * startet den normalen Modus in der Schwierigkeit leicht.
 */
function normalmodus(){
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht.html";
}
/**
 *
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof3.html";
}

function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof5.html";
}

function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof15.html";
}

function zurueck(){
    window.location="/Tic_Tac_Toe/views/single-menue.html";


}