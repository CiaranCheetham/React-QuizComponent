import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    render() {
        return (
            <li>
                <buttom>
                    {this.button_text}
                </buttom>
            </li>
        );
    }
}

export default QuizQuestionButton;