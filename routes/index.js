const express = require("express");

const router = express.Router();

const users = [];
let id = 1;

router.get('/users', (req, res) =>{
    res.json(users)
});

router.get('/users/:id', (req, res) =>{
const user =users.find(val => val.id === Number(req.params.id))
    res.json(user)
});

router.post("/users", (req, res) =>{
    users.push({
        name: req.body.name,
        id: ++id
    });
    res.json({ message: " user created" });
});

router.patch("/users/:id", (require, response) =>{
    const user = users.find(val => val.id === Number(req.params.id));
    user.name = require.body.name;
        response.json({ message: "updated" });
    });

    router.delete("/users/:id", (req, res) =>{
        const userIndex =users.findIndex(val => val.id === Number(req.params.id))
        users.splice(userIndex, 1)
        res.json({ message: "deleted" })

        });

module.exports = router;