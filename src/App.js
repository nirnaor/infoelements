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

function InfoTitle() {
  return (
        <div className="title">
          Licorice
        </div>
  )
}

function Description() {
  return (
        <div className="description">
          A popular herbal ingridient in colds and flu teas
          a widespread
        </div>
  )
}

function Icons() {
  return (
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
  )
}


function CustomButton() {
  return (
        <div className="custombutton">
          <input type="button" value="Button" />
        </div>
  )
}
function App() {
  return (
    <div className="parent">
      <Section position='top'>
        <InfoTitle />
      </Section>
      <Section position='middle'>
        <Description />
        <Icons />
      </Section>

      <Section position='bottom'>
        <CustomButton />
      </Section>
    </div>
  );
}

export default App;
