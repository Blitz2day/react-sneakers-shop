import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-30">
          <div className="d-flex align-center justify-between mb-30">
            <h1>All sneakers</h1>
            <div className="search-block d-flex align-center">
              <img src="/images/search.svg" alt="Search"/>
              <input placeholder="Search..."/>
            </div>
          </div>
          <div className="d-flex flex-wrap"> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div> 
        </div>
    </div>
  
  );
}

export default App;
