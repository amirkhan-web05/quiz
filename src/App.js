import { useContext } from 'react';
import { Question } from './components/Question';
import { QuizContext } from './context/quiz';

function App() {
   const [quizState, dispatch] = useContext(QuizContext);

   return (
      <div className="quiz">
         {!quizState.showResults ? (
            <div>
               <div className="score">
                  Question {quizState.currentQuestionIndex + 1} /{' '}
                  {quizState.questions.length}
               </div>
               <Question />
               <div
                  onClick={() => dispatch({ type: 'NEXT-QUESTION' })}
                  className="next-button"
               >
                  Next Question
               </div>
            </div>
         ) : (
            <div className="results">
               <div className="congrulation">Congrulation</div>
               <div className="results-info">
                  <div>You have complete the quiz.</div>
                  <div>
                     You ve got {quizState.correctAnswerCount} of{' '}
                     {quizState.questions.length}
                  </div>
                  <div
                     onClick={() => dispatch({ type: 'RESTART' })}
                     className="restart"
                  >
                     Restart
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default App;
