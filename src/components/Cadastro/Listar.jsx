import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Card from "./Card.jsx";


export default function Listar() {

    const [listGames, setListGames] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/Listar")
            .then((response) => {
                setListGames(response.data);
            });
    })

    return <>
        <div>
            {typeof listGames !== "undefined" &&
                listGames.map((value) => {
                    return (
                        <Card
                            key={value.id}
                            listGames={listGames}
                            setListGames={setListGames}
                            id={value.id}
                            pergunta={value.pergunta}
                            resp01={value.resp01}
                            resp02={value.resp02}
                            resp03={value.resp03}
                            resp04={value.resp04}
                            respcorreta={value.respcorreta}
                        ></Card>
                    );
                })}
        </div>
    </>
}