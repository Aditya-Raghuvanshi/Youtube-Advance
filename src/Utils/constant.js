const GOOGLE_API = process.env.REACT_APP_GOOGLE_API;
export const YOUTUBE_SUGESSTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOU_TUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API;