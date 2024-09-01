import axios from "axios";

const BASE_URL =
  "https://script.google.com/macros/s/AKfycby-Wn-J0x_9XJqHqNn3qZyYUphWQg6BLC6PFx_1SP5hXbelDmAr8ydCbkaJDC16QrdRHQ/exec";

const getDirectLink = (url) => {
  const match = url.match(/imgur\.com\/(a\/|gallery\/)?(\w+)/);
  if (!match) {
    return url;
  }
  const fileId = match[2];
  return `https://i.imgur.com/${fileId}.jpg`;
};

const fetchArtists = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?sheet=artists`);
    const artistsData = response.data;

    const artistsByGenre = artistsData.reduce((acc, artist) => {
      const genre = artist.genre_;
      if (!acc[genre]) {
        acc[genre] = [];
      }
      const imageUrl = getDirectLink(artist.image);
      acc[genre].push({
        artistName: artist.artist_name,
        description: artist.description_,
        image: imageUrl,
      });
      return acc;
    }, {});

    return artistsByGenre;
  } catch (error) {
    return {};
  }
};

export { fetchArtists };
