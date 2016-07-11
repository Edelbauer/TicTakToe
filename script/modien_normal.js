/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/**
 * startet den normalen Modus in der Schwierigkeit normal
 */
function normalmodus(){
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_normal.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 3 Modus in der Schwierigkeit normal
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_normal_bestof3.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 5 Modus in der Schwierigkeit normal
 */
function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_normal_bestof5.html";
}
/**
 * sertzt die wins uns loses auf 0, startet den best of 15 Modus in der Schiwerigkeit normal
 */
function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_normal_bestof15.html";
}
/**
 * Geht eine Ebene zurück
 */
function zurueck(){
    window.location="/Tic_Tac_Toe/views/single-menue.html";


}