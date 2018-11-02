const express = require('express');
const app = new express();
const url = require('url');

app.set('view engine', 'ejs');

app.use(express.static('./'));

app.get('/:str', (req, res) => {
    const { str } = req.params;
    const validArgs = { easy: 1, medium: 1, hard: 1 };
    
    console.log(str)
    if (!validArgs[str]) {
      res.jsonp(`Invalid arg: '${str}'. Valid args: 'easy', 'medium', 'hard'`)
    }

    res.jsonp('YAY!!');
  })
  
  app.listen(3000, () => console.log("Listening To Port 3000"));