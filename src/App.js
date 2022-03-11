import './App.css';
import config from './config'
console.log(config)

function App() {
  return (
    <div className="parent">
      <div className="section top"> 
        <div className="title">
          Licorice
        </div>
      </div>
      <div className="section middle">
        <div className="description">
          A popular herbal ingridient in colds and flu teas
          a widespread
        </div>
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
      </div>

      <div className="section bottom">
        <div className="custombutton">
          <input type="button" value="Button" />
        </div>
      </div>
    </div>
  );
}

export default App;
