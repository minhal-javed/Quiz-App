import React,{useState} from 'react';

import {QuestionsProps} from '../Types/quiz_types'

export const QuestionCard: React.FC<QuestionsProps> = ({ options, questions,callback})=>{
    
    let [selectedAns,setSelectedAns]=useState('')
    

    const handleSelection=(e:any)=>{
        setSelectedAns(e.target.value)
    }


    return(
    <div className='question-container'>
           
           <div className='question'>
            {questions}
           </div>

            <form className='question-form' onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
               {options.map((opt:string,num:number)=>{

                   return(
                       
                       <div key={num}>
                           <label  className='radio' >
                           <input type='radio'
                           name='opt'
                           value={opt} 
                           required
                           checked={selectedAns===opt}
                           onChange={handleSelection}
                           
                           />
                           {opt}
                       </label>
                       
                       </div>
                   )

               })}
                < input type='submit' />

           </form>
        </div>
    )
}