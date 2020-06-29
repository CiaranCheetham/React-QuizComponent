import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    render() {
        return (
            <li>
                <button>
                    {this.button_text}
                </button>
            </li>
        );
    }
}

export default QuizQuestionButton;