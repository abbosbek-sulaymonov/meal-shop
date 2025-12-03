import { API_URL } from "./config";

// filter data using categories

const getFilterCategory = async (category) => {
  const res = await fetch(`${API_URL}filter.php?c=${category}`);
  return await res.json();
};

// getting data using ID

const getMealById = async (id) => {
  const res = await fetch(`${API_URL}lookup.php?i=${id}`);
  return await res.json();
};

// get all data by categories

const getAllCategories = async () => {
  const res = await fetch(API_URL + "categories.php");
  return await res.json();
};

// export the functions written above
export { getAllCategories, getMealById, getFilterCategory };
