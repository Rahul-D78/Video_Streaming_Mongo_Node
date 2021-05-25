const {Router} = require("express");
const Model = require("../model/stream");
const route = Router();

route.post('/', async(req, res) => {
    const file = new Model({
        filename: "Mr Robot",
        uuid: "1234566778",
        size: 20
    })
    try {
        const results= await file.save();
        res.send(results);
    } catch (e) {
        res.send(e);
    }
});

route.get('/', (req, res) => {
    try {
        const results = Model.find({});
        res.status(200).send(results)
    } catch (e) {
        res.send(e);
    }
})

module.exports = route;