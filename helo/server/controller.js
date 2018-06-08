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

}