const Website = require('../models/website');


exports.getWebsites = (req, res, next) => {
    Website.find()
        .then(websites => {
            res
                .status(200)
                .json({ message: 'Fetched websites successfully.', websites: websites });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createWebsite = (req, res, next) => {
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;
    const url = req.body.url;

    const website = new Website({
        name: name,
        ageGroup: ageGroup,
        year:year,
        tags: tags,
        summary: summary,
        type: type,
        url: url

    })
    website.save()
        .then(result => {
            console.log('Insert new website: ', result);
            res.status(201).json({
                message: 'Website created successfully!',
                website: result
            });
        })
        .catch(err => {
            console.log('insert bool into DB error: ', err);
        });
};

exports.updateWebsite = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;
    const url = req.body.url;
    console.log('got update request of: ID', id, 'name: ', req.body);
    Website.findById(id)
        .then(website =>{
            if(!website){
                const error = new Error('Could not find website');
                error.statusCode = 404;
                throw error;
            }
            website.name = name;
            website.ageGroup = ageGroup;
            website.year = year;
            website.tags = tags;
            website.summary = summary;
            website.type = type;
            website.url = url;
            return website.save()
        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Website was updated'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })


}


exports.deleteWebsite = (req, res, next) => {
    const id = req.params.id;
    Website.findById(id)
        .then(website =>{
            if(!website){
                const error = new Error('Could not find website');
                error.statusCode = 404;
                throw error;
            }
            return Website.findByIdAndDelete(id);

        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Website was deleted'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })

};
