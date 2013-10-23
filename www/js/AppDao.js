/* ====================================================
    To operate Web sql, it is very helpful to CRUD operation
 ====================================================== */

var AppDao = function(){

    var UserDao = function(){
        return {
            insert : function(uid, name, age, successCallback,errorCallback){
           
                    dbController.executeSql("INSERT OR REPLACE INTO TB_User (uid, name, age) VALUES (?,?,?);",
                                        [uid,
                                         name,
                                         age],
                                        successCallback, errorCallback);
            },
            delete_by_id : function(uid,successCallback,errorCallback){
                
                    dbController.executeSql("DELETE FROM TB_User WHERE uid = ? ;",
                                            [uid],
                                            successCallback, errorCallback);
            },
            select_all : function(successCallback,errorCallback){
                
                dbController.executeSql("select * from TB_User",
                                        [],
                                        successCallback, errorCallback);
            }
            
        }
    };
	
	    var RoleDao = function(){
        return {
            insert : function(rid, rname, successCallback,errorCallback){
           
                    dbController.executeSql("INSERT OR REPLACE INTO TB_Role (rid, rname) VALUES (?,?);",
                                        [rid,
                                         rname],
                                        successCallback, errorCallback);
            },
            delete_by_id : function(rid,successCallback,errorCallback){
                
                    dbController.executeSql("DELETE FROM TB_Role WHERE rid = ? ;",
                                            [uid],
                                            successCallback, errorCallback);
            },
            select_all : function(successCallback,errorCallback){
                
                dbController.executeSql("select * from TB_Role",
                                        [],
                                        successCallback, errorCallback);
            }
            
        }
    };
    
    //////////////////////////////////////////////////////////////////////
    
    return {
        
        getUserDao : function(){
            return UserDao();
        },
        
        getRoleDao : function(){
            return RoleDao();
        }
    }
};

var appDao = AppDao();