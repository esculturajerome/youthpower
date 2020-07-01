const express = require("express");
const router = express.Router();

//Models
const Post = require("../../models/Post");

// @route Get api/post
// @desc Get all Posts

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts));
});

// @route POST api/post
// @desc Creat a Post

router.post("/", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
  });

  newPost.save().then((post) => res.json(post));
});

// @route DELETE api/post/:id
// @desc Delete a Post

router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => post.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ succes: false }));
});

// res.json([
//     { id: 1, name: "jerome" },
//     { id: 2, name: "Gel" },
//   ]);

// @desc login/Landin Page
// @route Get /login

// router.get("/dashboard", (req, res) => {
//   res.send("dashboard");
// });

module.exports = router;
