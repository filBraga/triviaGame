import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const MIN_SCORE = 3;

class Teladojogo extends React.Component {
  render() {
    const { score } = this.props;

    return (
      <div>
        <Header />
        <h1>Tela do feedback</h1>
        <div data-testid="feedback-text">
          { score < MIN_SCORE ? <h3>Could be better...</h3> : <h2>Well Done!</h2> }
        </div>
        <h4 data-testid="feedback-total-score">
          {`Sua pontuação total é: ${score || 0}`}
        </h4>
        <h4 data-testid="feedback-total-question">
          Você acertou: X
        </h4>
        <button type="button" data-testid="btn-play-again">
          Play Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleSendNome: (nome) => dispatch(setUserName(nome)),
// });

Teladojogo.propTypes = {
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Teladojogo);
