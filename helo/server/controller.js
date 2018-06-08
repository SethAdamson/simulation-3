module.exports = {
    createUser: (req, res) => {
        // console.log(req.body);
        const db = req.app.get('db');
        const {username, password, pic} = req.body;

        db.create_user([username, password, pic])
        .then(user => res.status(200).send(user))
        .catch(() => res.status(500).send('Error'));
    },
    getUser: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        db.get_user([username, password])
        .then(user => res.status(200).send(user))
        .catch(() => res.status(500).send('Error'));
    },
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
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
            db.get_otherposts([id])
            .then(posts => res.status(200).send(posts))
            .catch((e) => {
                console.log(e); 
                res.status(500).send(e)
            })
        } else if (!userposts && search) {
            db.get_otherposts_search([id, str])
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
        const {id} = req.params;

        db.get_single([id])
        .then(post => res.status(200).send(post))
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    },
    newPost: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {title, img, content} = req.body;

        db.new_post([title, img, content, id])
        .then(() => res.status(200).send('Posted'))
        .catch((e) => {
            console.log(e); 
            res.status(500).send(e)
        })
    }

}