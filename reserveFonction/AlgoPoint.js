
import isPositiveOrBeZero from './isPositiveOrBeZero'

export default function AlgoPoint(joueur, place, toped, topcut) {
    console.log(joueur, place, toped, topcut)
    let resultat = isPositiveOrBeZero((Math.trunc(joueur / 8) - (place - 1))) * 1  
    if(toped > 0)
    {
        console.log("in", resultat)
         resultat + isPositiveOrBeZero((topcut / 2) - (toped - 1)) * 1
         console.log("out", resultat)
    }
    return (resultat)
}