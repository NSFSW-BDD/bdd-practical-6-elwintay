const pool = require('../services/db');

var categoryModel = {
    selectAll: (callback) => {

        const SQLSTATMENT = ` SELECT * FROM category; `;
        pool.query(SQLSTATMENT, callback);

    },
    insertCategory: (data, callback) => {

        const SQLSTATMENT = ` INSERT INTO category (name, description) VALUES (?,?); `;
        const VALUES = [data.name, data.description];
        pool.query(SQLSTATMENT, VALUES, callback);

    }
}

module.exports = categoryModel;
