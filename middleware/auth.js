const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    console.log("coucou avant")
    try {
        console.log("coucou");
        const token = req.headers.authorization.split(' ')[1];
        console.log("coucou après");
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