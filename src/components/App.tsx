import { SOCIETIES } from '../data/societies';
import Footer from './Footer';
import Header from './Header';
import Table from './Table';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="row">
          <Header />
        </div>
        <div className="row table-container">
          <Table societies={SOCIETIES} />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
