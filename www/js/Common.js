/* ==================================================
     Wrap some common method, Something like check connection, print log ..
   ================================================== */

/* show Loading */
function showPageLoading(msg){
    $.mobile.loading( 'show', {
                     text: msg,
                     textVisible: true,
                     theme: 'a',
                     html: ""
                     });
}

/* hide Loading */
function hidePageLoading(){
    $.mobile.loading( 'hide');
}

/* Print log infomation in console */
function dLogger(msg){
    if(ISDEBUG){
        console.log(msg);
    }
}

