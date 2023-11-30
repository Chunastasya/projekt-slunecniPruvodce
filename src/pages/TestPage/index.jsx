import { Link } from 'react-router-dom'; 
import test from '/assets/texts/test.json'
import  {  useState }  from 'react'
import Question from '../../components/Question';

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(test[0]);
  console.log(currentQuestion)
  return (
    <div className="test">
      <Question currentQuestion = {currentQuestion}></Question>

    </div>

  );
};




