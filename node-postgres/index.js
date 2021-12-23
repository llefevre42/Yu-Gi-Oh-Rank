const express = require('express')
const app = express()
const port = 3001

const getData = require('./getData')
const sendData = require('./sendData')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.post('/sendresult/:event/:place/:deck/:decklist/:youtube/:toped/:cossy', (req, res) => {
  sendData.sendResultat(req.params.event,req.params.place,req.params.deck,req.params.decklist,req.params.youtube,req.params.toped,cossy)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getoneevent/:id', (req, res) => {
  getData.getOneEvent(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getonejoueur/:id', (req, res) => {
  getData.getOneJoueur(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getoneteam/:id', (req, res) => {
  getData.getOneTeam(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getjoueurresultat/:id', (req, res) => {
  getData.getJoueurResultat(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getonejoueurresultat/:event/:cossy', (req, res) => {
  getData.getOneJoueurResultat(req.params.event, req.params.cossy)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/geteventresultat/:id', (req, res) => {
  getData.getEventResultat(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getallteam', (req, res) => {
  getData.getAllTeam()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getallplayerteam/:id', (req, res) => {
  getData.getAllPlayerTeam(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getallplayer', (req, res) => {
  getData.getAllPlayer()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getallevent', (req, res) => {
  getData.getAllEvent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/geteventresulat', (req, res) => {
  getData.getEventResultat()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getlastevent', (req, res) => {
  getData.getLastEvent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/getnextevent', (req, res) => {
  getData.getNextEvent()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})