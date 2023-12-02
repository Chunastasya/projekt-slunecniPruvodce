import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export const TestResultPage = () => {
  const [answers, setAnswers] = useState({});


  useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem('answers')));
  }, [])

  return (
    <div className="test-result">
      Test Result
    </div>
  );
};
