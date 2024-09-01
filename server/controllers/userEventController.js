const Userevent = require("../models/usereventModel");
const catchAsync = require("../utils/catchAsync");

exports.createUserEvent = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newUserevent = await Userevent.create(req.body);

  res.status(200).json({
    status: "success",
    data: newUserevent,
  });
});

exports.getAllUsersEvents = catchAsync(async (req, res, next) => {
  const events = await Userevent.find({ user: req.params.userid }).populate({
    path: "user",
    select: "-email",
  });
  res.status(200).json({
    status: "success",
    data: events,
    message: "this route not yet defined",
  });
});
exports.getAllEvents = catchAsync(async (req, res, next) => {
  const events = await Userevent.find();
  res.status(200).json({
    status: "success",
    data: events,
    message: "this route not yet defined",
  });
});

// exports.createUser = (req, res) => {
//   res.status(500).json({
//     status: 'error',
//     message: 'this route not yet defined',
//   });
// };

exports.updateUserEvent = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const doc = await Userevent.findByIdAndUpdate(req.body._id, req.body);
  if (!doc) {
    return next(new AppError("Tour does not exists", 404));
  }
  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.deleteUserEvent = catchAsync(async (req, res, next) => {
  const user = await Userevent.findByIdAndDelete(req.body._id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});
