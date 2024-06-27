const categoryModel = require("../models/categoryModel");
const furnitureModel = require("../models/furnitureModel");

var categoryController = {
    createNewCategory: (req, res, next) => {


        const data = {
            name: req.body.name,
            description: req.body.description,
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error createNewCategory:", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }

        categoryModel.insertCategory(data, callback);
    },
    getFurnitureByCategory: (req, res, next) => {
        const data = {
            catid: req.params.categoryId,
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error createNewCategory:", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }
        furnitureModel.selectByIdWithCategoryInfo(data, callback);
    }
}

module.exports = categoryController;
