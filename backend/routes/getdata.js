const express = require("express");
const router = express.Router();
const dataModel = require("../models/datamodel");

router.get("/getdata", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          region: { $nin: ["world", "World", ""] },
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$region",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/year", async (req, res) => {
  try {
    const year = parseInt(req.query.year);
    const data = await dataModel.find({ end_year: { $lte: year } });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/topic", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          topic: req.query.topic,
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          country: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$country",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/sector", async (req, res) => {
  try {
    const data = await dataModel.find({ sector: req.query.sector });
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/region", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          region: req.query.region,
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          topic: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$topic",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/country", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          country: req.query.country,
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          topic: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$topic",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/pestle", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          pestle: req.query.pestle,
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          country: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$country",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/sector", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          sector: req.query.sector,
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          region: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$region",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/endyear", async (req, res) => {
  try {
    const data = await dataModel.aggregate([
      {
        $match: {
          $and: [
            { end_year: { $ne: "" } },
            { end_year: { $lte: parseInt(req.query.endyear) } },
          ],
          relevance: { $ne: "" },
          intensity: { $ne: "" },
          likelihood: { $ne: "" },
          region: { $ne: "" },
        },
      },
      {
        $group: {
          _id: "$region",
          data: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$data",
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
router.get("/getdata/distinct", async (req, res) => {
  try {
    const data = await dataModel.distinct(req.query.val);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
