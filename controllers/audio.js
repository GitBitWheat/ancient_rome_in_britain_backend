const Audio = require('../models/audio');


exports.getAudios = (req, res, next) => {
    Audio.find()
        .then(audiovisuals => {
            res
                .status(200)
                .json({ message: 'Fetched audios successfully.', audiovisuals: audiovisuals });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.createAudio = (req, res, next) => {
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;

    const audio = new Audio({
        name: name,
        ageGroup: ageGroup,
        year: year,
        tags: tags,
        summary: summary,
        type: type
    });
    audio.save()
        .then(result => {
            console.log('Insert new audio: ', result);
            res.status(201).json({
                message: 'Audio created successfully!',
                audio: result
            });
        })
        .catch(err => {
            console.log('insert bool into DB error: ', err);
        });
};

exports.updateAudio = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const ageGroup = req.body.ageGroup;
    const year = req.body.year;
    const tags = req.body.tags;
    const summary = req.body.summary;
    const type = req.body.type;
    console.log('got update request of: audioId', id, 'name: ', req.body);
    Audio.findById(id)
        .then(audio =>{
            if(!audio){
                const error = new Error('Could not find audio');
                error.statusCode = 404;
                throw error;
            }
            audio.name = name;
            audio.ageGroup = ageGroup;
            audio.year = year;
            audio.tags= tags;
            audio.summary = summary;
            audio.type = type;
            return audio.save()
        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Audio was updated'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })


}


exports.deleteAudio = (req, res, next) => {
    const id = req.params.id;
    Audio.findById(id)
        .then(audio =>{
            if(!audio){
                const error = new Error('Could not find audio');
                error.statusCode = 404;
                throw error;
            }
            return Audio.findByIdAndDelete(id);

        })
        .then(result =>{
            console.log(result);
            res.status(200).json({message:'Audio was deleted'});
        })
        .catch(err =>{
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })

};
