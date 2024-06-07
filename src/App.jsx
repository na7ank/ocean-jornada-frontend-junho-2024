import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    title: 'BloxPlot Graph',
    image: 'https://doc.arcgis.com/en/insights/latest/create/GUID-5C7AAF44-C609-472D-9193-0E9B23C6B68F-web.png',
    status: 'Active',
    specie: 'BoxPlot',
    origin: 'Regions'
  }
  const item2 = {
    title: 'Line Graph',
    image: 'https://raw.githubusercontent.com/na7ank/LinearRegression/main/imgs/output.png',
    status: 'Active',
    specie: 'Lines',
    origin: 'Regression'
  }
  const item3 = {
    title: 'Scatter Graph',
    image: 'https://docs.tibco.com/pub/spotfire/6.5.2/doc/html/images/scat_example1.png',
    status: 'Active',
    specie: 'Scatter',
    origin: 'Points'
  }
  return (
    <>
    <div className="cards">
      <Card item = {item1} />
      <Card item = {item2} />
      <Card item = {item3} />
    </div>
    </>
  )
}
export default App
