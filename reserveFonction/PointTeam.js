import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import urlSite from "./../configServ"


export default function PointTeam(id) {
    const router = useRouter()

    const [playersInTeam, getAllPlayers] = useState();


    useEffect(() => {
        if (!router.isReady) return;
        getAllPlayerInTeam();
    }, [router.isReady]);
    function getAllPlayerInTeam() {
        fetch(urlSite + 'getallplayerinteam')
            .then(response => response.json())
            .then(data => {
                getAllPlayers(data);
            });
    }
    let point
    if (playersInTeam != undefined) {
        point = 0
        playersInTeam.map((player, index2) => {
            console.log("ah?", player.id_team, id)
            if (player.id_team == id) {
                console.log("in")
                point += player.point_joueur
            }
        })
    }
    return (point
    )
}