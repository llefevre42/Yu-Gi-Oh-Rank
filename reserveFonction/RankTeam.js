import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import urlSite from "./../configServ"


export default function PointTeam(id) {
    const router = useRouter()
    const [teams, getAllTeams] = useState([]);
    const [players, getAllPlayers] = useState([]);

    useEffect(() => {
        if (!router.isReady) return;
        getAllTeam();
        getAllPlayerInTeam();
    }, [router.isReady]);

    function getAllTeam() {
        fetch(urlSite + 'getallteam')
            .then(response => response.json())
            .then(data => {
                getAllTeams(data);
            });
    }
    function getAllPlayerInTeam() {
        fetch(urlSite + 'getallplayerinteam')
            .then(response => response.json())
            .then(data => {
                getAllPlayers(data);
            });
    }
    teams.map((team, index) => {
        players.map((player, index2) => {
            if (player.id_team == team.id_team) {
                teams[index].total_point_team += player.point_joueur
            }
        })
    })
    teams.sort(function (a, b) {
        return b.total_point_team - a.total_point_team})
    let res = teams.findIndex(element => element.id_team == id)
    return (res + 1
    )
}