const ControllerUtility = require('./ControllerUtility');

module.exports ={


    getBlockedEvents:()=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('SELECT * FROM events WHERE blocked = ?',[true],(err,results)=>{
                connection.end();
                if(err){
                    reject(err)
                }else {
                    resolve(results)
                }

            })
        })
    },
    getBlockedUsers:()=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('SELECT * FROM registered WHERE blocked = ?',[true],(err,results)=>{
                connection.end();
                if(err){
                    reject(err)
                }else {
                    resolve(results)
                }

            })
        })
    },
    reportEvent:(eventID)=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('UPDATE events SET reported = ? WHERE eid = ?', [true, eventID],(err)=>{
                connection.end()
                if(err){
                    reject(err)
                }else {
                    resolve()
                }

            })
        })
    },
    reportUser:(userID)=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('UPDATE users SET reported = ? WHERE user_id = ?', [true, userID],(err)=>{
                connection.end()
                if(err){
                    reject(err)
                }else {
                    resolve()
                }
            })
        })
    },
    blockEvent:(eventID)=>{
        return new Promise(function(resolve, reject) {
       const connection =  ControllerUtility.createConnection();
        connection.query('UPDATE events SET blocked = ? WHERE eid = ?', [true, eventID],(err)=>{
            connection.end()
            if(err){
                reject(err)
            }else {
                resolve()
            }

        })
        })
    },
    unblockEvent:(eventID)=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('UPDATE events SET blocked = ? WHERE eid = ?', [false, eventID],(err)=>{
                connection.end()
                if(err){
                    reject(err)
                }else {
                    resolve()
                }
            })
        })
    },
    blockUser:(userID)=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('UPDATE users SET blocked = ? WHERE user_id = ?', [true, userID],(err)=>{
                connection.end()
                if(err){
                    reject(err)
                }else {
                    resolve()
                }
            })
        })
    },
    unblockUser:(userID)=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('UPDATE users SET blocked = ? WHERE user_id = ?', [false, userID],(err)=>{
                connection.end()
                if(err){
                    reject(err)
                }else {
                    resolve()
                }
            })
        })
    }
}