import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards() {
    // const people=[];
    const [people, setPeople] = useState([]);
    //Piece of code which runs based on condition
    useEffect(() => {
        //this is where the code runs..

        // this will run once when components loads,and never again
        database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ))
    }, []);


    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}

                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
