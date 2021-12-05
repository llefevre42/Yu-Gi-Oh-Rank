const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ludovic',
  host: 'localhost',
  database: 'YugiohRank',
  password: 'adn59bis',
  port: 5432,
});
const getOneEvent = (id) => {
  return new Promise(function(resolve, reject) {
    console.log('ids : ',id)
    pool.query('SELECT * FROM public."Evenement" WHERE id_event = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows[0]);
    })
  }) 
}

const getOneJoueur = (id) => {
  return new Promise(function(resolve, reject) {
    console.log('ids : ',id)
    pool.query('SELECT * FROM public."Joueur" WHERE id_cossy = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows[0]);
    })
  }) 
}

const getJoueurResultat = (id) => {
  return new Promise(function(resolve, reject) {
    console.log('ids : ',id)
    pool.query('SELECT * FROM public."Resultat" where id_cossy = $1 ', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getAllEvent = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Evenement" ORDER BY id_event ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const getAllTeam = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Team" ORDER BY id_team ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const getLastEvent = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Evenement" WHERE now() > date_event ORDER BY date_event desc', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getNextEvent = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Evenement" WHERE now() < date_event ORDER BY date_event desc', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  const getEventResultat = (id_event) => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."Resultat" natural join public."Evenement" where id_event =' + {id_event}, (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
  module.exports = {
    getOneEvent,getAllEvent, getEventResultat , getLastEvent,getNextEvent,getAllTeam, getOneJoueur,getJoueurResultat
  }