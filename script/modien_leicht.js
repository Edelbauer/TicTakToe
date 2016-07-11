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
 *setzt die wins und loses auf 0, startet den best of 3 Modus in der Schwierigkeit leicht
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof3.html";
}
/**
 * setzt wins und loses auf 0, startet den best of 5 Modus in der Schwierigkeit leicht
 */
function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof5.html";
}
/**
 * setzt wins und loses auf 0, startet den best of 15 Modus in der Schwierigkeit leicht
 */
function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_leicht_bestof15.html";
}
/**
 * Geht zurueck in das Einzelspieler-Menue
 */
function zurueck(){
    window.location="/Tic_Tac_Toe/views/single-menue.html";


}