import './App.css';

function App() {
  return (
    <div className="parent">
      <div className="section top"> 
        <div className="aligner title">
            Licorice
        </div>
      </div>
      <div className="section middle">
        <div className="aligner description">
            nir
        </div>
        <div className="aligner icons">
          <div className="icons">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
          </div>
        </div>
      </div>

      <div className="section bottom">
        <div className="aligner">
          <div className="custombutton">
            <input type="button" value="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
