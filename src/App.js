
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/SideBar/Sidebar';
import Widgets from './components/Widget/Widgets';
function App() {
  return (
    <div className="app">

        {/* Sidebar right part */}
        <Sidebar />

        {/* Feed middle part*/}
        <Feed />

        {/* Widgets left part */}
        <Widgets />
    </div>
  );
}

export default App;
