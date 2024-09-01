import axios from "axios";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycby-Wn-J0x_9XJqHqNn3qZyYUphWQg6BLC6PFx_1SP5hXbelDmAr8ydCbkaJDC16QrdRHQ/exec";

const formatImageUrl = (url) => {
  const match = url.match(/imgur\.com\/(a\/|gallery\/)?(\w+)/);
  if (match) {
    const fileId = match[2];
    return `https://i.imgur.com/${fileId}.jpg`;
  }

  return url;
};

const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?sheet=news`);
    const articlesData = response.data.map((article) => ({
      ...article,
      image: article.image ? formatImageUrl(article.image) : null,
    }));

    console.log("API Response:", articlesData);
    return articlesData;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
};

export default fetchArticles;
