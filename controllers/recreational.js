const Recreational = require('../models/recreational');


exports.getRecreational = (req, res, next) => {
    Recreational.find()
        .then(recreational => {
            res
                .status(200)
                .json({ message: 'Fetched Recreational successfully.', recreational: recreational });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createRecreational = (req, res, next) => {
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;

    const recreational = new Recreational({
        name: name,
        ageGroup: ageGroup,
        year: year,
        tags: tags,
        summary: summary,
        type: type
    });
    recreational.save()
        .then(result => {
            console.log('Insert new recreational: ', result);
            res.status(201).json({
                message: 'Recreational created successfully!',
                recreational: result
            });
        })
        .catch(err => {
            console.log('insert bool into DB error: ', err);
        });
};

exports.updateRecreational = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;
    console.log('got update request of: recreationalID', id, 'name: ', req.body);
    Recreational.findById(id)
        .then(recreational =>{
            if(!recreational){
                const error = new Error('Could not find recreational');
                error.statusCode = 404;
                throw error;
            }
            recreational.name = name;
            recreational.ageGroup = ageGroup;
            recreational.year = year;
            recreational.tags= tags;
            recreational.summary = summary;
            recreational.type = type;
            return recreational.save()
        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Recreational was updated'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })


}


exports.deleteRecreational = (req, res, next) => {
    const id = req.params.id;
    Recreational.findById(id)
        .then(recreational =>{
            if(!recreational){
                const error = new Error('Could not find recreational');
                error.statusCode = 404;
                throw error;
            }
            return Recreational.findByIdAndDelete(id);

        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Recreational was deleted'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })

};
