import { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./Characters ";



export default function Home() {


  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://hp-assessment-api.herokuapp.com/hp/characters"
    );
    
    setCharacters(response.data);
  };
  //arguments -> arrow funcion, empty array
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!Characters
        ? "Loading"
        : characters.map((char) => {
            return (
              <div>
                <ul>
                  <li>
                <Characters
                  name={char.name}
                  birth={char.born}
                  ID={char.id}
                  // house={char.house}
                  // // image={<img src={char.imageUrl} />}
                />
                </li>
                </ul>
              </div>
            );
          })}
    </div>
  );
}
