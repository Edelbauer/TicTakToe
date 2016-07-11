/**
 * Created by Praktikant.STTINSM on 08.07.2016.
 */
/**
 * Startet den normalen Modus n der Schwierigkeit extrem
 */
function normalmodus(){
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_extrem.html";
}
/**
 * setzt die wins und loses auf 0, startet den best of 3 Modus in der Schierigkeit extrem
 */
function bestof3(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_extrem_bestof3.html";
}
/**
 *setzt die wins und loses auf 0, startet den best of 5 Modus in Schwierigkeit extrem
 */
function bestof5(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_extrem_bestof5.html";
}
/**
 * Setzt die wins und loses auf 0, startet den best of 15 Modus in der Schwierigkeit extrem
 */
function bestof15(){
    document.cookie="player=0";
    document.cookie="pc=0";
    window.location="/Tic_Tac_Toe/views/tic_tac_toe_extrem_bestof15.html";
}
/**
 * Geht zurueck in das Einzelspieler-Menue
 */
function zurueck(){
    window.location="/Tic_Tac_Toe/views/single-menue.html";


}