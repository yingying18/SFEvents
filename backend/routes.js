
module.exports = function(app){
 	app.get('/',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/home/index.html')
 	})
 	app.get('/login',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/login/index.html')
 	})
 	app.get('/signup',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/signup/index.html')
 	})
 	app.get('/password/recovery',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/passwordRecovery/index.html')
 	})
 	app.get('/admin',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/admin/index.html')
 	})
 	app.get('/management',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/management/index.html')
 	})
 	app.get('/search/results',(req,res)=>{
 		
 		res.sendFile(__dirname+'/public/eventList/index.html')
 	})
 	app.get('/event',(req,res)=>{
 		res.sendFile(__dirname+'/public/event/index.html')
 	})
 	app.get('/privacy',(req,res)=>{
 		res.send("this is the privacy page")
 	})
}