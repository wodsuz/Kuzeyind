import { createClient } from "pexels";
const API_KEY = process.env.PEXEL_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/videos/videos/3840442`,
    // 10816119
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const responseJson = await res.json();
  return responseJson.video_files[0];
};
