import express from "express";
import MoviesController from "./movies.controller.js";

const router = express.Router();
router.get("/", MoviesController.apigetMovies);

export default router;
