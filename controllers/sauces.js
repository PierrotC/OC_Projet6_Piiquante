const Sauce = require('../models/sauce');
const fs = require('fs');

exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json( sauces ))
        .catch(error => res.status(404).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.status(200).json( sauce ))
        .catch(error => res.status(404).json({ error }));
};

exports.newSauce = (req, res, next) => {
    const objectSauce = JSON.parse(req.body.sauce);

    delete objectSauce._id;
    delete objectSauce._userId;

    const sauce = new Sauce({
        ...objectSauce,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: []
    });

    sauce.save()
        .then(() => res.status(201).json({ message: 'New sauce has been added'}))
        .catch(error => res.status(400).json({ error }));
};

exports.updateSauce = (req, res, next) => {
    const objectSauce = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    delete objectSauce._userId;

    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            if(sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                Sauce.updateOne({ _id: req.params.id }, { ...objectSauce, _id: req.params.id})
                    .then(() => res.status(200).json({ message: 'Sauce updated' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => res.status(404).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            if(sauce.userId != req.auth.userId) {
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                const imgName = sauce.imageUrl.split('/images/')[1];
                fs.unlink(`images/${ imgName }`, () => {
                    Sauce.deleteOne({ _id: req.params.id })
                        .then(() => res.status(200).json({ message: 'Sauce deleted' }))
                        .catch(error => res.status(400).json({ error }));
                });
            }
        })
        .catch(error => res.status(404).json({ error }));

};

exports.likeSauce = (req, res, next) => {
    const likeValue = req.body.like;
    const userId = req.body.userId;

    Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
            if(likeValue == 1) {
                sauce.likes++;
                sauce.usersLiked.push(userId);
            } else if(likeValue == -1) {
                sauce.dislikes++;
                sauce.usersDisliked.push(userId);
            } else if(likeValue == 0) {
                if(sauce.usersLiked.includes(userId)) {
                    sauce.usersLiked.splice(sauce.usersLiked.indexOf(userId), 1);
                    sauce.likes--;
                } else if(sauce.usersDisliked.includes(userId)) {
                    sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(userId), 1);
                    sauce.dislikes--;
                }
            }

            sauce.save()
                .then(() => res.status(200).json({ message: 'Like/dislike savec' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
};