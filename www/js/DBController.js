/* ========================================================
     A database Helper utility, You can manage database table with xml file, and you can create table, or excute any sql you want. Just so simply.
       ======================================================== */

var DBController = function() {

	var db, success, failure;
    
    return {

		init : function(name, importscript, successHandler , errorHandler) {
			
            dLogger("DBController init...");
            
			// TODO - allow for version
			db = window.openDatabase(name, "1.0", name, 200000);
            //db = window.sqlitePlugin.openDatabase({name: "texonline.db"});
            dLogger(JSON.stringify(db));
            
            if(YES != appConfig.getPro("HasInit")){
                if (typeof importscript !== "undefined") {
                    dLogger("Start execute batch");
                    if (typeof successHandler === "undefined"){
                        throw "Invalid call - must pass success handler when importing data";
                    }
                    this.executeBatch(importscript, successHandler , errorHandler);
                }
            }
			
		},
        
		executeBatch : function(path, successHandler, errorHandler) {
			dLogger("DBController executeBatch...");
			success = successHandler;
			failure = errorHandler;
			$.get(path, {}, this.gotFile, "xml");
		},

		// sql, successHandler, errorHandler are required
		executeSql : function(sql, args, successHandler, errorHandler) {
			
			dLogger("going to run => "+sql + " arguments => "+JSON.stringify(args));
            
			// Don't like this - but way to make args be optional and in 2nd
			// place
			if (arguments.length == 3) {
				successHandler = arguments[1];
				errorHandler = arguments[2];
				args = [];
			}
			db.transaction(function(tx) {
				tx.executeSql(sql, args, function(tx, res) {
					// todo - figure out fraking scoping rules and why line
					// below didnt work, nor this.X
					// res = translateResultSet(res);
					var result = [];
					for ( var i = 0; i < res.rows.length; i++) {
						result.push(res.rows.item(i));
					}
					successHandler(result);
				})
			}, errorHandler)
		},

		gotFile : function(doc) {
			
			//dLogger("DBController gotFile..."+doc);

			var statements = [];
			var statementNodes = doc.getElementsByTagName("statement");
            
			for ( var i = 0; i < statementNodes.length; i++) {
				statements.push(statementNodes[i].textContent);
			}
			if (statements.length) {
                
				db.transaction(function(tx) {
					dLogger("db.transaction...");
					// do nothing
					for ( var i = 0; i < statements.length; i++) {
                        dLogger("ExecuteSql Sql => "+statements[i]);
						tx.executeSql(statements[i]);
					}
				}, failure, success);
			}
		},

		translateResultSet : function(res) {
			dLogger("DBController translateResultSet...");
			var result = [];
			for ( var i = 0; i < res.rows.length; i++) {
				result.push(res.rows.item(i));
			}
			return result;

		}

	}

};