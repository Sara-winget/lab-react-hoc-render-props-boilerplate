import './App.css';
import LImage from './components/LImage';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Lpost from './components/Lpost';
import Counter from './components/RenderProp';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
<Counter render={(count,increcount)=>(
<Lpost count={count} increcount={increcount}/>
)}/>
<Counter render={(count,increcount)=>(
<LImage count={count} increcount={increcount}/>
  )}/>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;
