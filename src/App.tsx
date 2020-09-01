import React,{useEffect,useState} from 'react';
import {QuestionCard} from './Components/QuestionCard'
import { getQuizData} from './Services/quiz_service'
import { QuestionType} from './Types/quiz_types';
import './App.css'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentstep] = useState(0);
  let [score,setScore]=useState(0)
  let [showResult,setShowResult]=useState(false);

useEffect(()=>{
  async function fetchData(){
    const questions:QuestionType[] = await getQuizData(5, 'easy');
    setQuiz(questions)
   console.log(questions);
    
  }
  fetchData(); 
  
  
},[])

const handleSubmit=(e:React.FormEvent<EventTarget>,userAns:string)=>{
  e.preventDefault();
 
  const currentQuestion:QuestionType=quiz[currentStep]

  
  
  if (userAns === currentQuestion.correct_answer){
    setScore(++score)
  }
  
  if(currentStep!==quiz.length-1) {
  setCurrentstep(++currentStep)
} else{
 setShowResult(true)
 
}
}


  if (!quiz.length){
    return <h3 className='loading'>Loading...</h3>
  }

  if(showResult){
    return (<div className='question-container'>
      <h2 >Result</h2>
      <p>
        Your Final Score is {score} out of {quiz.length}
      </p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>)
  }

  return (
    <div className="App">
      <h2>Quiz App</h2>
     
       <QuestionCard
        options={quiz[currentStep].option}
        questions={quiz[currentStep].question}
        callback={handleSubmit}
 />
      
      
    </div>
  );
}

export default App;
