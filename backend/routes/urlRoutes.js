import express from "express";
import {
  createShortUrl,
  redirectToLongUrl,
  getAllUrls
} from "../controllers/urlController.js";

const router = express.Router();

router.post("/api/shorten", createShortUrl);
router.get("/api/urls", getAllUrls);
router.get("/:shortcode", redirectToLongUrl);

export default router;
