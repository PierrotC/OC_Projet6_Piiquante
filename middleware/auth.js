const { JsonWebTokenError } = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization.split(' ')[1];
        verifiedTkn = JsonWebTokenError.verify(token, 'soSe_CreT27_TO_k2E8n_aWSm_');
        // const userId = verifiedTkn.userId;
        req.auth = {
            userId: verifiedTkn.userId
        };
        next();
    } catch(error) {
        res.status(401).json({ error });
    }
}