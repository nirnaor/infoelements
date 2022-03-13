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

function InfoDescription() {
  return (
        <div className="description">
          A popular herbal ingridient in colds and flu teas
          a widespread
        </div>
  )
}

function InfoIcons() {
  return (
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
  )
}


function InfoCustomButton() {
  return (
        <div className="custombutton">
          <input type="button" value="Button" />
        </div>
  )
}

function createSection(orderList) {
  const CompsMap = {
    Title: InfoTitle,
    Description: InfoDescription,
    Icons: InfoIcons,
    CustomButton: InfoCustomButton
  }
  const InfoComponents = orderList.map(x => CompsMap[x])
  return InfoComponents.map(Comp => (<Comp />))

}
function createRealSection(sectionName) {
  const orderList = config.internal.order[sectionName]
  const rendererComps = createSection(orderList)
  return (
      <Section position={sectionName}>
        {rendererComps}
      </Section>
  )
}
function App() {
  const sections = ['top', 'middle', 'bottom'].map(createRealSection)
  return (
    <div className="parent">
      {sections}
    </div>
  );
}

export default App;
