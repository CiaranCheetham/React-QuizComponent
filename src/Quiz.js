import React, { Component, useState} from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        return <div>
            <QuizQuestion quiz_question={quizData.quiz_questions[this.quiz_position-1]}/>
        </div>
    }
}

// function Quiz() {
//     const [quizPosition, setQuizPosition] = useState(1);
//     return (
//     <div>
//         <div className="QuizQuestion">
//             {quizData.quiz_questions[0].instruction_text}
//         </div>
//     </div>
//     );
// }

export default Quiz;