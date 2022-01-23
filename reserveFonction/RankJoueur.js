import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import urlSite from "../configServ"


export default function RankJoueur(id) {
    const [players, getAllPlayer] = useState([]);
    useEffect(() => {
        getAllPlayers();
    }, []);
    function getAllPlayers() {
        fetch(urlSite + 'getallplayer')
            .then(response => response.json())
            .then(data => {
                getAllPlayer(data.sort(function (a, b) { return b.point_joueur - a.point_joueur }))
            });
    }
    let res = players.findIndex(element => element.id_cossy == id)
    return (res + 1
    )
}
