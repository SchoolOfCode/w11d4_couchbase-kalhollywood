import express from "express";
const router = express.Router();
import books from './books.js';

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

router.get("/books", books)

export default router;
