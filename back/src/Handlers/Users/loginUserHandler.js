const userLogin = require("../../Controllers/Users/loginUser");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let login = await userLogin(email, password);
    res.status(200).json({ login: login });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = loginUser;
