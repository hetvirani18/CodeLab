const express = require('express');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const {generateUploadSignature,saveVideoMetadata,deleteVideo} = require("../controllers/videoController");

const videoRouter =  express.Router();

videoRouter.get("/create/:problemId",adminAuthMiddleware, generateUploadSignature);
videoRouter.post("/save",adminAuthMiddleware, saveVideoMetadata);
videoRouter.delete("/delete/:problemId",adminAuthMiddleware, deleteVideo);


module.exports = videoRouter;