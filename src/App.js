import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/homes/Home';
import AboutUs from './pages/aboutuspage/AboutUs';
import Project from './pages/projectpage/Project';
import Event from './pages/eventpage/Event';
import Team from './pages/teampage/Team';
import Contributor from './pages/contributorspage/Contributors';
import Contact from './pages/contact/Contact';

import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';


import SingleEvent from './pages/events/SingleEvent';

// import Loader from "react-js-loader";

function App() {
      //  const [loading,setLoading] = useState(false);

      //  useEffect(()=>{
      //   setLoading(true)
      //   setTimeout(()=>{
      //     setLoading(false)
      //   },8000)
      //  },[])
      //  {
      //   loading ?(
      //     <MoonLoader color={color} loading={loading} css={override} size={150} />
      //   )
         
  
      // }
  return (
    
    <div className="App">
      
     <Router>
       
        <Switch>
        <ScrollToTopRoute exact={true} path='/'>
          <Home/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/about'>
        <AboutUs/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/project'>
        <Project/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/event'>
        <Event/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/team'>
        <Team/>
        </ScrollToTopRoute>   
        <ScrollToTopRoute exact={true} path='/contributor'>
        <Contributor/>
        </ScrollToTopRoute> 
        <ScrollToTopRoute exact={true} path='/contact'>
        <Contact/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/rpa'>
        <SingleEvent/>
        </ScrollToTopRoute>
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
