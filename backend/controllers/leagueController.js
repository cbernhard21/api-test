const asyncHandler = require('express-async-handler');

const Owner = require('../models/ownerModel')

// @desc get league info
// @route GET /api/ejffl
// @access Private
const getLeagueInfo = asyncHandler(async(req, res) => {
  const owners = await Owner.find()
  res.status(200).json(owners);
});

// @desc set league info
// @route POST /api/ejffl
// @access Private
const setLeagueInfo = asyncHandler(async(req, res) => {
  if (!req.body.teamName) {
    res.status(400);
    throw new Error('Please Enter A Team Name');
  }
  const owner = await Owner.create({
    teamName: req.body.teamName,
    ownerFirstName: req.body.ownerFirstName,
    ownerLastName: req.body.ownerLastName,
  })
  res.status(200).json(owner);
})

// @desc update league info
// @route PUT /api/ejffl/:id
// @access Private
const updateLeagueInfo = asyncHandler(async(req, res) => {
  const owner = await Owner.findById(req.params.id);
  if (!owner) {
    res.status(400)
    throw new Error('Owner Not Found')
  }
  const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedOwner);
})

// @desc delete league info
// @route DELETE /api/ejffl:id
// @access Private
const deleteLeagueInfo = asyncHandler(async(req, res) => {

  const owner = await Owner.findById(req.params.id);

  if (!owner) {
    res.status(400)
    throw new Error('Owner Not Found')
  }
  await owner.remove();

  res.status(200).json({ id: req.params.id });
})

module.exports = {
  getLeagueInfo,
  setLeagueInfo,
  updateLeagueInfo,
  deleteLeagueInfo
}