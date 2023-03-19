
import './App.css';



function App() {
  return (
    <>
      <PersonlList/>
    </>
    
    
  );
}

const PersonlList =()=>{
const people =[
  {
    img:22, name:"Amit",job:"developer"
  },

  {
    img:78, name:"Harsh",job:"designer"
  },

  {
    img:90, name:"Aman",job:"artist"
  }
]

  return(
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
        this man is very sharp.He probabily gonna become an IAS.
      </Person> 
      <Person person={people[2]}  />

      <Extra/>
    </section>

  )
}

const Person=(props)=>{
  const {img,name,job}=props.person;
  const{children}=props;
  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  
  return (
    <div className='person' style={{textAlign:"center"}} >
        <img  src={url} alt="this is first person img" ></img>
        <div>
          <h4 >{name}</h4>
          <h4>{job}</h4>
          {children}
        </div>
    </div>
   
  )
}

const Extra=()=>{
  return (
    <div style={{textAlign:"center"}}>
        <img src="https://randomuser.me/api/portraits/thumb/men/45.jpg" alt="this is first person img" ></img>
    </div>
  )
}



export default App;
