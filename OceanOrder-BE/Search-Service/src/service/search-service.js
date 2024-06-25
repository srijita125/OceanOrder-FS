import axios from "axios";

class SearchService {
  async searchBySparePartName(name) {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/sparepart/${name}`
      );
      return response.data;
    } catch (error) {
      console.log("Something went wrong in search service", error);
      return error;
    }
  }

  async searchByIMPA(impa) {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/sparepart/${impa}`
      );
      return response.data;
    } catch (error) {
      console.log("Something went wrong in search service", error);
      return error;
    }
  }

  // here i am doing like category ko ek alag db mein store karke rakha hain
  // vendor jab product enter karega along with category we will firstly search 
  // in category if it exist then we will add that product's id in category schema
  // if it doesn't exist then we will filter out category from there 
  // and that category name in the category db
  async searchByCategory(category) {
    try {
        // so here i store the category 
      const categoryResponse = await axios.get(
        `http://localhost:3002/categories/${category}`
      );

      // so here i am mapping product ids from category
      const productIds = categoryResponse.data.map((product) => product._id);

      // so here i am fetching all products 
      const productResponse = await axios.get(
        `http://localhost:3001/products/ids`, { ids: productIds }
      );
      return productResponse.data;
    } catch (error) {
      console.log("Something went wrong in search service", error);
      return error;
    }
  }

  async searchByVendor(vendor) {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/vendor/${vendor}`
      );
      return response.data;
    } catch (error) {
      console.log("Something went wrong in search service", error);
      return error;
    }
  }
}

export default SearchService;
