const jwt = require('jsonwebtoken');

const secretKey = 'pradipta'; 

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ error: 'Authentication failed: Token not provided' });
    }

    const decodedToken = jwt.verify(token, secretKey);

    req.userData = { userId: decodedToken.userId, role: decodedToken.role };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed: Invalid token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.userData.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admin access required' });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };
