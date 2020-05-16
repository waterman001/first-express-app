const express = require("express");

const router = express.Router();

const items = [];
let id = 1;

router.get('/items', (require, response) =>{
    response.json(items)
});

router.get('/items/:id', (require, response) =>{
const item = items.find(val => val.id === Number(require.params.id))
    response.json(item)
});

router.post("/items", (require, response) =>{
    items.push({
        name: require.body.name,
        price: require.body.price,
        id: ++id
    });
    response.json({ message: " item created" });
});

router.patch("/items/:id", (require, response) =>{
    const item =items.find(val => val.id === Number(require.params.id));
    item.name = require.body.name;
    item.price = require.body.price
        response.json({ message: "updated" });
    });

    router.delete("/items/:id", (req, res) =>{
        const itemIndex =items.findIndex(val => val.id === Number(req.params.id))
        items.splice(itemIndex, 1)
        res.json({ message: "deleted" })

        });

module.exports = router;
