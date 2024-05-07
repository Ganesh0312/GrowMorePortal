const admins = [{ username: "admin", password: "ganesh123" }];

const getAdminController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const admin = admins.find((admin) => admin.username === username);

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.json({ message: "Login successful", admin });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = getAdminController;
