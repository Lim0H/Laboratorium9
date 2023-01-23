const router = require("express").Router()
const Post = require("./models/Post")

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
        res.header("Access-Control-Allow-Origin", "*")
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

router.post("/", async (req, res) => {
    try {
        const post = await new Post({ ...req.body }).save()
        res.header("Access-Control-Allow-Origin", "*")
        res.status(201).send(post)
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

module.exports = router