import './App.css';
import config from './config'
console.log(config)

function Section(props) {
  return (
      <div className={`section ${props.position}`}> 
        {props.children}
      </div>
  )
}

function App() {
  return (
    <div className="parent">
      <Section position='top'>
        <div className="title">
          Licorice
        </div>
      </Section>
      <Section position='middle'>
        <div className="description">
          A popular herbal ingridient in colds and flu teas
          a widespread
        </div>
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
      </Section>

      <Section position='bottom'>
        <div className="custombutton">
          <input type="button" value="Button" />
        </div>
      </Section>
    </div>
  );
}

export default App;
