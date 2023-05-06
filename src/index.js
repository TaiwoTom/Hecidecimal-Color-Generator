import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap-5.3.0-alpha3-dist/css/bootstrap.css";
import "./style.css"

const hexColors = [
  ["# 4e417e", "#7923d7", "#393b73", "# 7010b2"],
  ["#02dc92", "#6e5eeb", "# 8cfac0", "#c50007" ],
  ["#dfbaa0", "#2a176b", "# 1a4f07", "# cfe583"],

];

const HexColor1 = ({ hexColors:[color1, color2, color3, color4]}) => (

  <div><button style= {{backgroundColor: '#4e417e'}}> {color1[0]}</button>
  <button style= {{backgroundColor: '#7923d7'}}> {color1[1]}</button>
  <button style= {{backgroundColor: '#393b73'}}> {color1[2]}</button>
  <button style= {{backgroundColor: '#7010b2'}}> {color1[3]}</button>
  </div>
)
const HexColor2 = ({ hexColors:[color1, color2, color3, color4]}) => (

  <div><button style= {{backgroundColor: '#02dc92'}}> {color2[0]}</button>
  <button style= {{backgroundColor: '#6e5eeb'}}> {color2[1]}</button>
  <button style= {{backgroundColor: '#8cfac0'}}> {color2[2]}</button>
  <button style= {{backgroundColor: '#c50007'}}> {color2[3]}</button>
  </div>
)

const HexColor3 = ({ hexColors:[color1, color2, color3, color4]}) => (

  <div><button style= {{backgroundColor: '#dfbaa0'}}> {color3[0]}</button>
  <button style= {{backgroundColor: '#2a176b'}}> {color3[1]}</button>
  <button style= {{backgroundColor: '#1a4f07'}}> {color3[2]}</button>
  <button style= {{backgroundColor: '#cfe583'}}> {color3[3]}</button>
  </div>
)


class HexColors extends React.Component {
  constructor({hexColors}) {
    super({hexColors})
  }
  render(){
  const col1 = hexColors.map((hexColor) => <HexColor1 hexColors = {hexColors}/>)
  const col2 = hexColors.map((hexColor) => <HexColor2 hexColors = {hexColors}/>)
  const col3 = hexColors.map((hexColor) => <HexColor3 hexColors = {hexColors}/>)
 return (<div className="row">
 <div className="col" style= {{marginRight: -40, marginLeft: 174, SnaparginLeft: 20, padding:40}}> {col1[0]}</div>,
 <div className="col" style= {{padding:40}}> {col2[0]}</div>
 <div className="col" style= {{marginLeft: -40, marginRight: -100,padding:40}}> {col3[0]}</div>
 </div>)
  
};
}


const JsxElement = () => {
  return (
    <div classname="body">
      <h1>30 Days Of React</h1>
      <p>Hexadecimal Colors</p>
      <HexColors hexColors={hexColors} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<JsxElement />, rootElement);


