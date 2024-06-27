const pool = require('../services/db');

var furnitureModel = {
    selectById: (data, callback) => {
 
        const SQLSTATMENT = ` SELECT * FROM furniture WHERE fid = ?; `;
        const VALUES = [data.fid];
        pool.query(SQLSTATMENT, VALUES, callback);

    },
    selectByIdWithCategoryInfo: (data, callback) => {
 
        const SQLSTATMENT = ` SELECT * FROM furniture WHERE catid = ?; `;
        const VALUES = [data.catid];
        pool.query(SQLSTATMENT, VALUES, callback);
    },
}

module.exports = furnitureModel;

