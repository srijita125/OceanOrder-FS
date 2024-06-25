import express from "express";
import { searchByCategory, searchByIMPA, searchBySparePartName, searchByVendor } from "../controller/search-controller.js";

const router = express.Router();


router.get("/search/sparepart/:sparePartName", searchBySparePartName);
router.get("/search/impa/:impa", searchByIMPA);
router.get("/search/category/:categoryName", searchByCategory);
router.get("/search/vendor/:vendorName", searchByVendor);

export default router