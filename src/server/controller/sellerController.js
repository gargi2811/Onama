const Seller = require('../models/seller');

exports.getSellers = async (req, res, next) => {
  const sellers = await Seller.find();

  if (!sellers) {
    return next(new AppError('No seller found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: sellers,
  });
};
