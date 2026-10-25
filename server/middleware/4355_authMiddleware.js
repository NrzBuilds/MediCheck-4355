const jwt = require("jsonwebtoken");
const User = require("../models/4355_User");

const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token (remove "Bearer " part)
      token = req.headers.authorization.split(" ")[1];

      // Verify token using JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user by ID from token, exclude password field
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Token valid, move to next function (the actual route)
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = protect;