import React from 'react';
import Carousel from './Carousel';
import GameList from './GameList';
import NewGameForm from './NewGameForm';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainGameList: [
        {
          title: 'Test Game 1',
          img: 'testimg.png',
          rating: 3.6,
          price: 5,
          featured: false,
          platforms: 'Switch',
          id: 'kwnxoi',
        },
        {
          title: 'Test Game 2',
          img: 'testimg.png',
          rating: 4.5,
          price: 7,
          featured: true,
          platforms: 'PC',
          id: 'oi21jxl',
        },
        {
          title: 'Test Game 3',
          img: 'testimg.png',
          rating: 4.1,
          price: 2,
          featured: false,
          platforms: 'Mac',
          id: 'mciowh24',
        },
      ],
    };
  }

  handleAddingNewGameToList = (newGame) => {
    const newMainGameList = this.state.mainGameList.concat(newGame);
    this.setState({ mainGameList: newMainGameList });
  };

  render() {
    return (
      <React.Fragment>
        <h4>This is game control</h4>
        <Carousel />
        <h4>This splits carousel stuff and game list</h4>
        <GameList gameList={this.state.mainGameList} />
        {/* <NewGameForm onNewGameCreation={this.handleAddingNewGameToList} /> */}
      </React.Fragment>
    );
  }
}

export default GameControl;
