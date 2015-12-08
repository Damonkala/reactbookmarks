var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
   res.json({ links: links });
});

router.delete('/api/links/', function(req, res, next) {
   var doomedLink = req.body.id;
   for(var i = 0; i <= links.length; i++){
     if(links[i].id == doomedLink){
       links.splice(i, 1)
      console.log(i)
     } else {
       console.log("safe", links[i].id)
     }

   }
   console.log(links)
   res.json({ links: links });


});

router.post('/api/links', function(req, res, next) {
   var newLink = req.body;
   newLink.id = Date.now();
   links.push(newLink);
   res.json(newLink);
});

module.exports = router;
