const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ludovic',
  host: 'localhost',
  database: 'YugiohRank',
  password: 'adn59bis',
  port: 5432,
});
const sendResultat = (event,place,deck,decklist,youtube,toped,cossy) => {
    return new Promise(function (resolve, reject) {
      pool.query(
        'INSERT INTO public."Resultat"(id_event, place, deck_joueur, img_decklist, youtube_link, toped, id_cossy) VALUES ($1 , $2, $3 , $4 , $5 , $6 , $7 )', [event,place,deck,decklist,youtube,toped,cossy], (error, results) => {
        if (error) {
          reject(error)
        }
        if (results != undefined)
          resolve(results);
        else
          resolve(results);
      })
  
    })
  }
  module.exports = {
    sendResultat
  }