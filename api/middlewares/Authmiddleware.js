const dotenv = require("dotenv");
dotenv.config();
const { verify } = require("jsonwebtoken");
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) return res.json({ error: "Not Logged In!" });
  try {
    const validToken = verify(accessToken, process.env.ACCESS_TOKEN);
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
module.exports = { validateToken };
