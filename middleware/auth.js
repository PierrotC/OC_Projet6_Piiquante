const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        verifiedTkn = jwt.verify(token, 'soSe_CreT27_TO_k2E8n_aWSm_');
        const userId = verifiedTkn.userId;
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        res.status(403).json({ error });
    }
};