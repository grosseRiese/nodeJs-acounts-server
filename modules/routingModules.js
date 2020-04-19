module.exports = (app, db) => {

    let createAcount=()=>{
        db.get('acounts')
          .push({username:'snowShoes',password:'123abc',Email:'badwitch@gmail.uk' })
          .write();
    }
    //createAcount();

    //Endpoint get All users... In reality You don't need this endpoint!
    app.get('/api/users', async (req, res) => {
        let username = [];
        let usersDb = await db.get('acounts').value();
        usersDb.forEach(element => {
            username.push(element.username);
        });
        console.log('username ...: ', username);
        res.status(200).send(JSON.stringify(username));
    });

    //Endpoint login...
    app.post('/api/login', async (req, res) => {

        let user = { username : req.body.username,
                    password : req.body.password };
        console.log(user);
        let allAcounts = await db.get('acounts').find(user).value();
        //console.log(allAcounts);
         if( allAcounts == null || allAcounts == undefined){
             return res.status(400).send(JSON.stringify('Bad Request, could not find user'));
         }

        try{
               if((allAcounts.username == req.body.username) && (allAcounts.password==req.body.password)){
                   res.status(200).send(JSON.stringify('Success'));
                    console.log('Success 200');
                }else{
                    res.status(403).send(JSON.stringify('Not allowed'));
                    console.log('Not allowed');
                }
      }catch{
            res.status(500).send(JSON.stringify('OBS! Server error...'));
            console.log('OBS: 500');
        }
    });
       //Endpoint signup...
    app.post('/api/signup', async (req, res) => {

        let user = { username : req.body.username,
            password : req.body.password,
            Email : req.body.Email };

        try{ 
            if(user == null || user == undefined
                || user.username == ''
                || user.Email == ''
                || user.username == 'null' 
                || user.Email == 'null'
                || user.username == null 
                || user.Email == null
                || user.username == undefined
                || user.Email == undefined){
                    return res.status(400).send(JSON.stringify('Bad Request...'));
            }

            let userArr=[];
            let userDb = await db.get('acounts').value();
            userDb.forEach(element=>{
                userArr.push(element.username);
                userArr.push(element.Email);
            });
            
            let isIncludeUsername = userArr.includes(user.username);
            let isIncludeEmail = userArr.includes(user.Email);
                if(!isIncludeEmail && !isIncludeEmail){
                    await db.get('acounts').push(user).write();
                    res.status(201).send(JSON.stringify('Success'));
                    console.log('username Exists');
                }else
                if(isIncludeUsername ){
                    res.status(403).send(JSON.stringify('username Exists'));
                    console.log('username Exists');
                }else
                if(isIncludeEmail){
                    res.status(403).send(JSON.stringify('Email Exists'));
                    console.log('Email Exists');
                }
        }catch{
            res.status(500).send(JSON.stringify('Something went wrong !') );
        }
    });
}