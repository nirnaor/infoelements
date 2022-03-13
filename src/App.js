import './App.css';
import config from './config'

function Section(props) {
  return (
      <div className={`section ${props.position}`}> 
        {props.children}
      </div>
  )
}

function InfoTitle(props) {
  return (
        <div className="title">
          {props.text}
        </div>
  )
}

function InfoDescription(props) {
  return (
        <div className="description">
          {props.text}
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


function InfoCustomButton(props) {
  return (
        <div className="custombutton">
          <input type="button" value={props.buttonText}/>
        </div>
  )
}

function createSection(orderList, masterInfoConfig) {
  const CompsMap = {
    Title: {CompClass: InfoTitle, pathForData: 'titleParams'},
    Description: {CompClass: InfoDescription, pathForData: 'descriptionParams'},
    Icons: {CompClass: InfoIcons, pathForData: 'iconsParams'},
    CustomButton: {CompClass: InfoCustomButton, pathForData: 'buttonParams'}
  }
  return orderList
    .map(x => CompsMap[x])
    .map(x => (<x.CompClass key={x.pathForData}  {...masterInfoConfig[x.pathForData]} />))
}

function createRealSection(sectionName, masterInfoConfig) {
  const orderList = masterInfoConfig.order[sectionName]
  const rendererComps = createSection(orderList, masterInfoConfig)
  return (
      <Section key={sectionName} position={sectionName}>
        {rendererComps}
      </Section>
  )
}

function createMasterInfo(masterInfoName) {
  const masterInfoConfig = config[masterInfoName]
  const sections =  ['top', 'middle', 'bottom'].map(x => createRealSection(x, masterInfoConfig))
  return (
    <div key={masterInfoName} className="parent">
      {sections}
    </div>
  );
}
function App() {
  const masterInfos = ['internal', 'external'].map(createMasterInfo)
  return (
    <div>
      {masterInfos}
    </div>
  )
}

export default App;
