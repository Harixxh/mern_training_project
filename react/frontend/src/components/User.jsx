const user = (props)=>{
    
    const skills = props.skills
    console.log(skills);
  return(
        <div style={{color:"blue"}}>
            <h1> I am {props.name} from {props.department} </h1>
            <ol>
                {skills.map(skill => {
                    return <li>{skill}</li>
                })}
            </ol>
        </div> 
    )
}

export default user;