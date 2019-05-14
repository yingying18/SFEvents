const AdminController = require('../controllers/AdminController.js');

module.exports = function(app) {
    app.put('/api/blocked/event',(req,res)=>{
        const {eventID} = req.params;
     AdminController.getBlockedEvents().then((data)=>{
         res.send(data)
     }).catch((err)=>{
         res.status(500).end();
         console.log(err)
     })
    });
    app.put('/api/blocked/user',(req,res)=>{
        const {eventID} = req.params;
        AdminController.getBlockedUsers().then((data)=>{
            res.send(data)
        }).catch((err)=>{
            res.status(500).end();
            console.log(err)
        })
    });
    app.put('/api/block/event/:eventID',(req,res)=>{
        const {eventID} = req.params;
        AdminController.blockEvent(eventID).then(()=>{
            res.send({done:true})

        }).catch((err)=>{
            console.log(err)
            res.status(500).end();
        })
    });
    app.put('/api/unblock/event/:eventID',(req,res)=>{
        const {eventID} = req.params;
        AdminController.unblockEvent(eventID).then(()=>{
            res.send({done:true})
        }).catch((err)=>{
            console.log(err)
            res.status(500).end();
        })
    });
    app.put('/api/block/user/:uid',(req,res)=>{
        const {uid} = req.params;
        AdminController.blockUser((uid)).then(()=>{
            res.send({done:true})
        }).catch((err)=>{
            res.status(500).end()
        })

    })
    app.put('/api/unblock/user/:uid',(req,res)=>{
        const {uid} = req.params;
        AdminController.unblockUser((uid)).then(()=>{
            res.send({done:true})
        }).catch((err)=>{
            res.status(500).end()
        })

    })


}