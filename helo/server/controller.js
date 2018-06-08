module.exports = {
    createUser: (req, res) => {
        // console.log(req.body);
        const db = req.app.get('db');
        const {username, password, pic} = req.body;

        db.create_user([username, password, pic])
        .then(user => {
            console.log(user);
            req.session.userid = user.id;
            res.status(200).send(user);
            console.log(req.session);
        })
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })    
    },
    getUser: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        db.get_user([username, password])
        .then(user => {
            console.log(user);
            req.session.userid = user.id;
            res.status(200).send(user);
            console.log(req.session);
        })
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    },
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.session;
        const {userposts, search} = req.query;
        let str = `%${search}%`
        // console.log(req.query, req.params, db.run);

        if(userposts && search){
            db.get_myposts_search([str])
            .then(posts => res.status(200).send(posts))
            .catch((e) => {
                console.log(e); 
                res.status(500).send(e)
            })
        } else if (!userposts && !search) {
            db.get_otherposts([userid])
            .then(posts => res.status(200).send(posts))
            .catch((e) => {
                console.log(e); 
                res.status(500).send(e)
            })
        } else if (!userposts && search) {
            db.get_otherposts_search([userid, str])
            .then(posts => res.status(200).send(posts))
            .catch((e) => {
                console.log(e); 
                res.status(500).send(e)
            })        
        } else if (userposts && !search) {
            db.get_posts()
            .then(posts => res.status(200).send(posts))
            .catch((e) => {
                console.log(e); 
                res.status(500).send(e)
            })        
        }
    },
    getSingle: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.session;

        db.get_single([userid])
        .then(post => res.status(200).send(post))
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    },
    newPost: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.session;
        const {title, img, content} = req.body;

        db.new_post([title, img, content, userid])
        .then(() => res.status(200).send('Posted'))
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send(req.session);
    },
    userInfo: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.session;

        db.user_info([userid])
        .then(user => res.status(200).send(user))
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    }
}