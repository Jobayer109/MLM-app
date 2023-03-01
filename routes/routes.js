const express = require("express");
const router = express.Router();
const User = require("../models/model");

// Create new user
router.post("/users", async (req, res) => {
  const { sponsorId, sponsorName, fullName, email } = req.body;

  // Find sponsor user
  const sponsor = await User.findOne({ sponsorId: sponsorId });

  // If sponsor is not found, return error
  if (!sponsor) {
    return res.status(404).json({ error: "Sponsor not found" });
  }

  // Check if sponsor has less than 4 downline users in current level
  if (sponsor.downline.length < 4) {
    const newUser = new User({
      sponsorId: sponsor.sponsorId,
      sponsorName: sponsor.sponsorName,
      fullName: req.body.fullName,
      email: req.body.email,
      level: sponsor.level + 1,
    });
    console.log(newUser);

    // Add new user to sponsor's downline
    sponsor.downline.push(newUser);
    await sponsor.save();

    // Save new user to database
    await newUser.save();

    res.status(201).json(newUser);
  } else {
    // Find the first available user in sponsor's downline tree
    const firstAvailableUser = await User.findOne({
      level: sponsor.level + 1,
      sponsorId: sponsor.downline[0].sponsorId,
      downline: { $size: 0 },
    });

    // If first available user is found, add new user to their downline
    if (firstAvailableUser) {
      const newUser = new User({
        sponsorId: firstAvailableUser.sponsorId,
        sponsorName: firstAvailableUser.sponsorName,
        fullName: fullName,
        email: email,
        level: sponsor.level + 2,
      });

      // Add new user to first available user's downline
      firstAvailableUser.downline.push(newUser);
      await firstAvailableUser.save();

      // Save new user to database
      await newUser.save();

      res.status(201).json(newUser);
    } else {
      res.status(404).json({ error: "No available user found" });
    }
  }
});

module.exports = router;
