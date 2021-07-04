import React from "react";
import axios from "axios";

const KEY = "AIzaSyBjpgECUCB4IuOSU3R_oUsNYp4fTYJPnhw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
