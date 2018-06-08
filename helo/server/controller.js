module.exports = {
    createUser: (req, res) => {
        console.log(req.body);
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
        console.log(req.query, req.params);

        if(userposts && search){
            db.get_myposts_search([search])
            .then(posts => res.status(200).send(posts))
            .catch(() => res.status(500).send('Error'))
        } else if (!userposts && !search) {
            db.get_otherposts([id])
            .then(posts => res.status(200).send(posts))
            .catch(() => res.status(500).send('Error'))
        } else if (!userposts && search) {
            db.get_otherposts_search([id, search])
            .then(posts => res.status(200).send(posts))
            .catch(() => res.status(500).send('Error'))
        } else if (userposts && !search) {
            db.get_posts()
            .then(posts => res.status(200).send(posts))
            .catch(() => res.status(500).send('Error'))
        }
    },



}