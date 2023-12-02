import { Link } from 'react-router-dom'; 
import test from '/assets/texts/test.json'
import  {  useState }  from 'react'
import Question from '../../components/Question';
import "./style.css";

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(test[1]);
  console.log(currentQuestion)
  return (
    <div className="test">
      <Question onSelect = {(data) => console.log(data)} currentQuestion = {currentQuestion}></Question>
     
      
      
     
      <div className='circles'>
      <button className='base-btn base-btn--left'></button>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <button className='base-btn base-btn--right'></button>
      </div>
    </div>
  

  );
};




