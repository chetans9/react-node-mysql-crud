let models = require('../models');
let CustomersModel = models.customers;
let createError = require('http-errors');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = async function (req, res, next) {
    try {

        let whereStatement = {};
        let pageSize = 10;
        let page = (req.query.page && req.query.page>=1) ? req.query.page :  1;

        let offset = (page * pageSize) - pageSize;
        let limit = pageSize;

        if (req.query.first_name) {
            whereStatement.first_name = req.query.first_name;
        }

        let customers = await CustomersModel.findAndCountAll({
            limit : limit,
            offset : offset,
            where : whereStatement
        });
        const totalPages = Math.ceil(customers.count / limit);
        let responseData = {
            totalItems : customers.count,
            data : customers.rows,
            currentPage : page,
            totalPages : totalPages

        };


        

        return res.json(responseData);

    } catch (err) {

        return next(createError(err, 500));

    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.create = async function (req, res, next) {

    try {

        let customers = await CustomersModel.create(
            req.body,
            { fields: ['first_name', 'last_name', 'email', 'date_of_birth', 'mobile', 'gender', 'address', 'pincode'] });

        return res.json(customers);

    } catch (err) {

        return next(createError(err, 500));
    }



}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = async function (req, res, next) {

    try {

        let customer = await CustomersModel.findOne({ where: { id: req.params.id } });
        await customer.update(req.body, { fields: ['first_name', 'last_name', 'email', 'date_of_birth', 'mobile', 'gender', 'address', 'pincode'] });
        //customer
        res.json(customer);

    } catch (err) {
        return next(createError(err, 500));

    }




}


exports.edit = async function (req, res, next) {
    try {

        let customer = await CustomersModel.findOne({ where: { id: req.params.id } });
        return res.json(customer);

    } catch (err) {

        return next(createError(err, 500));

    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.delete = async function (req, res, next) {

    try {

        let customer = await CustomersModel.findOne({ where: { id: req.params.id } });
        customer = await customer.destroy();
        return res.json(customer);

    } catch (err) {

        return next(createError(err, 500));

    }




}