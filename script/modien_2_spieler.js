/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/**
 * Startet den normalen Modus im Mehrspieler
 */
function normalmodus(){
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_2_spieler.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 3 Modus im Mehrspieler
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_2_spieler_bestof3.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 5 Modus im Mehrspieler
 */
function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_2_spieler_bestof5.html";
}
/**
 * setzt die wins und loses auf 0,startet den best of 15 Modus im Mehrspieler
 */
function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_2_spieler_bestof15.html";
}
/**
 * Geht eine Ebene zurück
 */
function zurueck(){
    window.location="/Tic_Tac_Toe/index.html";
}