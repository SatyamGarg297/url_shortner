import shortid from "shortid";
import Url from "../models/Url.js";

export const createShortUrl = async (req, res, next) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    res.status(400);
    return next(new Error("URL is required"));
  }

  try {

    // Backend ka current URL detect karega (local ya deployed)
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    let existing = await Url.findOne({ longUrl });
    if (existing) {
      return res.json({ shortUrl: `${baseUrl}/${existing.shortCode}` });
    }

    const shortCode = shortid.generate();
    const newUrl = await Url.create({ longUrl, shortCode });

    res.status(201).json({
      shortUrl: `${baseUrl}/${newUrl.shortCode}`
    });
  } catch (err) {
    next(err);
  }
};

export const redirectToLongUrl = async (req, res, next) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortcode });
    if (!url) {
      res.status(404);
      return next(new Error("Short URL not found"));
    }

    url.clicks++;
    await url.save();

    res.redirect(url.longUrl);
  } catch (err) {
    next(err);
  }
};

export const getAllUrls = async (req, res, next) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (err) {
    next(err);
  }
};
