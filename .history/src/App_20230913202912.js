import logo from './logo.svg';
import './App.css';

function ColorBox(props) {
  const { color } = props;
  return (
   <div className='box' style={{backgroundColor:color}}></div>
  )
}

export default ColorBox;
