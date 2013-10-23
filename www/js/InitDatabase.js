/* ===============================================================================
     Database initialization, it will create Tables when app is first started after be installed
   =============================================================================== */

var dbController = DBController();

function initDatabase(){
    
	appConfig.removePro("HasInit");
	
    dbController.init("test.db","sql/createtables.xml",successInitHandler,errInitHandler);
    
}

function successInitHandler(){
    
    dLogger("Create tables success");
    
    showToast("Create tables success");
    
    appConfig.setPro("HasInit",YES);
    
};

function errInitHandler(err){
    
    dLogger("Create tables failed "+err);
    
    showToast("Create tables failed : "+err);
};


