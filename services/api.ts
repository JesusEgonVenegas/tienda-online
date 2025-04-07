export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const data = require("../assets/data/data.json");
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
