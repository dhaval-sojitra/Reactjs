import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          margin: 5,
          marginBottom: 0
        }}
      >
        <p style={{ marginRight: "auto", marginLeft: "20PX" }}>{props.name}</p>
        <p style={{ marginLeft: "auto", marginRight: 20 }}>copy</p>
      </div>
      <div
        style={{ backgroundColor: "grey", padding: 10, margin: 5, marginTop: 0 }}
      >
        <p padding="10px" style={{ color: "white", marginLeft: 20 }}>
         {props.command}
        </p>
      </div>
    </>
  );
}

export default App;
