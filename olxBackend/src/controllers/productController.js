const productModel = require("../model/productModel");

module.exports.setProduct = async (req, res) => {
    const { title, description, price } = req.body;
    const { originalname } = req.file;

    const create = await productModel.insertMany([
        {
            name: title,
            desc: description,
            price: Number(price),
            filename: originalname,
        },
    ]);

    res.json({ msg: "file created.." });
};

module.exports.getProduct = async (req, res) => {
    const result = await productModel.find({});

    if (result.length <= 0) {
    } else {
        res.json({
            data: result,
        });
    }
};

module.exports.getSingleProduct = async (req, res) => {
    const find = await productModel.findOne({name: req.params.product})

    res.json({data: find})
}