const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ludovic',
  host: 'localhost',
  database: 'YugiohRank',
  password: 'adn59bis',
  port: 5432,
});
const getOneEvent = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Evenement" WHERE id_event = $1 ', [id], (error, results) => {
      console.log(error, results)
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows[0]);
      else
        resolve(results);
    })

  })
}

const getOneJoueur = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Joueur" natural join public."Team" where id_cossy =  $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows[0]);
      else
        resolve(results);
    })
  })
}

const getOneTeam = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Team" where id_team = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows[0]);
      else
        resolve(results);
    })
  })
}


const getOneJoueurResultat = (event, cossy) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Resultat" natural join public."Joueur" WHERE id_event = $1 AND id_cossy = $2', [event, cossy], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows[0]);
      else
        resolve(results);
    })
  })
}

const getEventResultat = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Resultat" natural join public."Joueur" WHERE id_event = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}

const getJoueurResultat = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Resultat" natural join public."Evenement" WHERE id_cossy = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}

const getAllEvent = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Evenement" ORDER BY id_event ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}
const getAllTeam = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Team" ORDER BY id_team ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}
const getLastEvent = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Evenement" WHERE now() > date_event ORDER BY date_event desc', (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}

const getNextEvent = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Evenement" WHERE now() < date_event ORDER BY date_event desc', (error, results) => {
      if (error) {
        reject(error)
      }
      if (results != undefined)
        resolve(results.rows);
      else
        resolve(results);
    })
  })
}

const getEventResultat2 = (id_event) => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM public."Resultat" natural join public."Evenement" where id_event =' + { id_event }, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

module.exports = {
  getOneEvent,
  getAllEvent,
  getEventResultat,
  getEventResultat2,
  getLastEvent,
  getNextEvent,
  getAllTeam,
  getOneJoueur,
  getJoueurResultat,
  getOneJoueurResultat,
  getOneTeam
}