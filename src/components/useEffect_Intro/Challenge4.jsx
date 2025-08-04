import React, { useState, useEffect } from 'react'
import { fetchBio } from './api'

const Challenge4 = () => {
    const [person, setPerson] = useState("Alice");
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let ignore = false;
        setBio(null);

        // Fetch the bio for the selected person
        fetchBio(person).then((result) => {
            if (!ignore) {
                setBio(result);
            }
        })

        return () => {
            ignore = true; // Cleanup function to prevent state updates if the component unmounts
        }
    }, [person]); 

    const handleSelect = (e) => {
        setPerson(e.target.value);
    }
  return (
    <div>
        <select value={person} onChange={handleSelect}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Taylor">Taylor</option>
        </select>
        <hr />
        <p>
            <i>{bio ?? "Loading..."}</i>
        </p>
    </div>
  )
}

export default Challenge4
