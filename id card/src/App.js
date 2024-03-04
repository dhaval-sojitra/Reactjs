import logo from './logo.svg';
import './App.css';
// import dhaval from './photo';

function App(props) {
  return (
   <>
   <div style={{display : "flex",
      justifyContent : "center",
      alignItems : "center",
      marginTop : "20px"}}>
   <div
    style={{
      border: "1px black solid",
      width: 350,
      borderRadius: 10,
      textAlign: "center",
      padding: "10PX"
      
    }}
  >
    <img src="atmiya.png" style={{ width: 100 }} alt="Atmiya Logo" />
    <h3>Atmiya University</h3>
    <img
      src="dhaval.jpg"
      style={{ width: 150, border: "1px black solid", borderRadius: "50%" }}
      alt="Dhaval image"
    />
    <h2>{props.name}</h2>
    <p>Enrollment No : {props.enrno}</p>
    <p>Blood Group : {props.bgroup}</p>
    <div style={{ display: "flex", width: 350 }}>
      <div style={{ backgroundColor: "red", width: "116.5px", height: 30 }} />
      <div style={{ backgroundColor: "green", width: "116.5px", height: 30 }} />
      <div style={{ backgroundColor: "blue", width: "116.5px", height: 30 }} />
    </div>
  </div>
  </div>
</>

  
  );
}

export default App;
