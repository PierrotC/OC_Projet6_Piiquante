const Sauce = require('../models/sauce');

// router.get('/', sauceCtrler.getAllSauces);
// router.get('/:id', sauceCtrler.getOneSauce);
// router.post('/', multer, sauceCtrler.newSauce);
// router.put('/:id', multer, sauceCtrler.updateSauce);
// router.delete('/:id', sauceCtrler.deleteSauce);
// router.post('/:id/like', sauceCtrler.likeSauce);


exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json( sauces ))
        .catch(error => res.status(404).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.json(200).json( sauce ))
        .catch(error => res.json(404).json({ error }));
};

exports.newSauce = (req, res, next) => {

};

exports.updateSauce = (req, res, next) => {

};

exports.deleteSauce = (req, res, next) => {

};

exports.likeSauce = (req, res, next) => {

};