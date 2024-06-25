import SearchService from "../service/search-service.js";

const searchService = new SearchService();

export const searchBySparePartName = async(req, res) => {
    try {
        const response = await searchService.searchBySparePartName(req.params.name);
        return res.status(200).json({
            success: true,
            message: "Searched by spare part name successfully",
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}

export const searchByIMPA = async(req, res) => {
    try {
        const response = await searchService.searchByIMPA(req.params.impa);
        return res.status(200).json({
            success: true,
            message: "Searched by IMPA successfully",
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}

export const searchByCategory = async(req, res) => {
    try {
        const response = await searchService.searchByCategory(req.params.category);
        return res.status(200).json({
            success: true,
            message: "Searched by category successfully",
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}

export const searchByVendor = async(req, res) => {
    try {
        const response = await searchService.searchByVendor(req.params.vendor);
        return res.status(200).json({
            success: true,
            message: "Searched by vendor successfully",
            data: response,
            err: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            data: {},
            err: err
        });
    }
}