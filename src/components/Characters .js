export default function Characters(props){ 




    return(
    


    
    <div >
        
        
            <h2>Name: {props.name}</h2>
            <p> Born On:{props.birth}</p>
            <p> Movie Id :{props.ID}</p>
            
            {/* <ul>
            {props.house.map((huis,index)=>{
                return (<div>
                    <li key= {index}>{huis.id}</li>
                    <li key= {index}>{huis.name} </li>
                </div>)
            }
            )}</ul>
            <p> image :{props.image}</p> */}
             <img
          src={props.Poster}
          alt={props.Title}
          style={{
            display: "block",
            maxWidth: "100%",
          }}
        />
           
            </div>
    
    

    )
    

}
  