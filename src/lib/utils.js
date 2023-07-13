import axios from "axios";

export const fetcher = async (url) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3${url}`);

    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

export const convertToHours = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${hours}h:${String(minutes).padStart(2, "0")}m`;
};
