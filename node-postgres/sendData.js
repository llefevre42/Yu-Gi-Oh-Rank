const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ludovic',
    host: 'localhost',
    database: 'YugiohRank',
    password: 'adn59bis',
    port: 5432,
});
const sendResultat = (body) => {
    return new Promise(function (resolve, reject) {

        const { event, place, deck, decklist, youtube, toped, cossy, point } = body
        pool.query(
            'INSERT INTO public."Resultat"(id_event, place, deck_joueur, img_decklist, youtube_link, toped, id_cossy, point_resultat) VALUES ($1 , $2, $3 , $4 , $5 , $6 , $7, $8 )', [event, place, deck, decklist, youtube, toped, cossy, point], (error, results) => {
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

const sendJoueur = (body) => {
    return new Promise(function (resolve, reject) {

        const { cossy, team, prenom, nom, photo } = body
        pool.query(
            'INSERT INTO public."Joueur"(id_cossy, id_team, photo_joueur, prenom_joueur, nom_joueur,  point_joueur) VALUES ($1 , $2, $3 , $4 , $5, 0  )', [cossy, team, photo, prenom, nom], (error, results) => {
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

const sendPoint = (body) => {
    return new Promise(function (resolve, reject) {
        const { point, cossy } = body
        pool.query(
            'UPDATE public."Joueur" SET point_joueur = point_joueur + $1  WHERE id_cossy = $2;', [point, cossy], (error, results) => {
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
    sendResultat, sendPoint, sendJoueur
}