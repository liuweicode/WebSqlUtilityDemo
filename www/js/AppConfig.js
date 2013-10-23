/* ====================================================
    Persistent data storage of key-value pair data in Web clients.
 ====================================================== */

var AppConfig = function(){
    return {
        setPro : function(key,val){
            dLogger("AppConfig-setPro => key:"+key+" val:"+val);
            window.localStorage.setItem(key, val);
        },
        
        getPro : function(key){
            var val = window.localStorage.getItem(key);
            dLogger("AppConfig-getPro => key:"+key+" val:"+val);
            return val;
        },
        
        removePro : function(key){
            dLogger("AppConfig-removeItem => key:"+key);
            window.localStorage.removeItem(key);
        },
        
        clearPro : function(){
            dLogger("AppConfig-clear");
            window.localStorage.clear();
        }
    }
};

var appConfig = AppConfig();
