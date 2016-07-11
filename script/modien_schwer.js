/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/**
 * Startet den normalen Modus in der Schwierigkeit schwer
 */
function normalmodus(){
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_schwer.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 3 Modus in der Schwierigkeit schwer
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_schwer_bestof3.html";
}
/**
 * setzt die wins uns loses auf 0, startet den best of 5 Modus in der Schwierigkeit schwer
 */
function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_schwer_bestof5.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 15 Modus in der schwierigkeit schwer
 */
function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_schwer_bestof15.html";
}
/**
 * Geht eine Ebene zurück
 */
function zurueck(){
    window.location="/Tic_Tac_Toe/views/single-menue.html";


}