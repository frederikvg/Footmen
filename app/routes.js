var footmen = require('./model/footmen');

module.exports = function (app) {

    app.get('/footmens', function (req, res) {
        footmen.find(function (err, monsters) {
            if (err) res.send(err);
            else res.json(monsters);
        });
    });

    app.post('/footmen', function (req, res) {
        var newMonster = new footmen({ 
            heroClass: req.body.heroclass, 
            monsterClass: req.body.monsterclass, 
            blabla: req.body.blabla, 
            yyy: req.body.yyy 
        });

        newMonster.save(function (err) {
            if (err)res.send(err);
            res.status(200).end();
        });
    });

    app.delete('/footmen/:id', function (req, res) {
        footmen.remove({
            _id: req.params.id
        }, function (err, todo) {
            if (err)
                res.send(err);
                res.status(200).end();
        });
    });

};