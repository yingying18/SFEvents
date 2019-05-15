const ControllerUtility = require('./ControllerUtility');

module.exports ={
    getReportedEvents:()=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('SELECT * FROM events WHERE isReported = ? AND isBlocked = ?',[true,false],(err,results)=>{
                connection.end();
                if(err){
                    reject(err)
                }else {
                    resolve(results)
                }

            })
        })
    },
    getReportedUsers:()=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('SELECT * FROM registered WHERE isReported = ? AND isBlocked = ?',[true,false],(err,results)=>{
                connection.end();
                if(err){
                    reject(err)
                }else {
                    resolve(results)
                }

            })
        })
    },


    getBlockedEvents:()=>{
        return new Promise(function(resolve, reject) {
            const connection =  ControllerUtility.createConnection();
            connection.query('SELECT * FROM events WHERE isBlocked = ?',[true],(err,results)=>{
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
            connection.query('SELECT * FROM registered WHERE isBlocked = ?',[true],(err,results)=>{
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
            connection.query('UPDATE events SET isReported = ? WHERE eid = ?', [true, eventID],(err)=>{
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
            connection.query('UPDATE registered SET isReported = ? WHERE user_id = ?', [true, userID],(err)=>{
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
        connection.query('UPDATE events SET isBlocked = ? WHERE eid = ?', [true, eventID],(err)=>{
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
            connection.query('UPDATE events SET isBlocked = ? WHERE eid = ?', [false, eventID],(err)=>{

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
            connection.query('UPDATE registered SET isBlocked = ? WHERE user_id = ?', [true, userID],(err)=>{
                connection.end()
                if(err){
                    console.log(err)
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
            connection.query('UPDATE registered SET isBlocked = ? WHERE user_id = ?', [false, userID],(err)=>{
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