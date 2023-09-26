
import { Route, Routes } from 'react-router-dom';
import { Container } from '../components/Container/Container';

// import { News } from '../page/News';
// import { Home } from '../page/Home';
import { SharedLayout} from '../components/Sharedlayout/Sharedlayout';
import { NotFound } from '../page/NotFound';
import {Home} from '../page/Home';


function App() {
  return (
    <Container className="wrapper">
      <Routes>
        <Route>
          <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>

          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Container>
   
  );
}

export default App;
