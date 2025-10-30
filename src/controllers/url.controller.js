const { urlModel } = require("../models");
const shortid = require("shortid");

class UrlController {
  async createShortUrl(req, res) {
    try {
      const body = req.body;
      if (!body.url)
        return res.status(400).json({ error: "Missing url in request body" });

      const shortId = shortid.generate();
      await urlModel.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
      });
      return res.status(201).json({
        shortUrl: `${req.protocol}://${req.get("host")}/${shortId}`,
      });
    } catch (err) {
      next(err);
    }
  }

  async getRedirectUrl(req, res, next) {
    try {
      const { id } = req.params;
      const urlEntry = await urlModel.findOneAndUpdate(
        {
          shortId: id,
        },
        {
          $push: {
            visitHistory: {
              timestamp: Date.now(),
              ip: req.ip,
              userAgent: req.get("User-Agent"),
            },
          },
        }
      );
      if (!urlEntry) {
        return res.status(404).json({ error: "Short URL not found" });
      }

      // Redirect to the original URL
      res.redirect(urlEntry.redirectUrl);
    } catch (err) {
      next(err);
    }
  }

  async getUrlAnalytics(req, res, next) {
	try {
	  const { id } = req.params;
	  const urlEntry = await urlModel.findOne({ shortId: id });
	  if (!urlEntry) {
		return res.status(404).json({ error: "Short URL not found" });
	  }


	  return res.status(200).json({
		shortUrl: `${req.protocol}://${req.get("host")}/${urlEntry.shortId}`,
		originalUrl: urlEntry.redirectUrl,
		totalClicks: urlEntry.visitHistory.length,
		visitHistory: urlEntry.visitHistory,
	  });
	} catch (err) {
	  next(err);
	}
  }
}

module.exports = new UrlController();
