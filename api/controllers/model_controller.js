const express = require('express');
const router = express.Router();
const Model = require('../models/model');

router.get('/model/all', (req, res) => {
  Model.find({}, (err, models) => {
    if (err) {
      return res.send(err);
      
    }
    let modelMap = [];

    models.forEach((model) => {
      // return console.log(model)
      modelMap.push({
        _id: model._id,
        url: model.url,
        name: model.name,
        answer: false
      });
    });

    res.send(modelMap);
  })
});

router.get('/model/generate', (req, res) => {
  const url = '/models/good_template_' + req.body.i + '.svg';
  const name = 'good_template_' + req.body.i;
    const model = new Model({
      url: url,
      name: name,
      answer: false
    });
    model.save()
      .then((docs) => {
        console.log(docs);
        res.json({m: 'Success'});
      })});

console.log('[Model Controller]', 'load routes');

module.exports = router;
