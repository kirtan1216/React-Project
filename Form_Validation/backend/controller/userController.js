const userDetail = require("../Models/userModel");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

exports.userForm = asyncErrorHandler(async (req, res, next) => {
  const userDetails = await userDetail.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      userDetails,
    },
  });
  console.log(res);
});
