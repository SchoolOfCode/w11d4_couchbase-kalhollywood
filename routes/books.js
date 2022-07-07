import express from "express";
const router = express.Router();

import {
  getBooks,
  searchBooksByTitle,
  searchBooksByAuthor,
} from "../models/books.js";

import { getBookById, createBook, deleteBookById, updateBookById } from '../repository/bookRepository.js'

/* books endpoints go here */

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const book = await getBookById(id);
  res.json({ success: true, payload: book });
});

router.get("/", function (req, res) {
  if (req.query.search !== undefined) {
    const result = searchBooksByTitle(req.query.search);
    return res.json({ success: true, payload: result });
  }

  if (req.query.author !== undefined) {
    const result = searchBooksByAuthor(req.query.author);
    return res.json({ success: true, payload: result });
  }

  const result = getBooks();
  res.json({ success: true, payload: result });
});



router.post("/", async function (req, res) {
  const newBook = req.body;
  const result = await createBook(newBook);
  res.json({ success: true, payload: result });
});

router.put("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updateBookById(id, data);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await deleteBookById(id);
  res.json({ success: true, payload: result });
});

export default router;
