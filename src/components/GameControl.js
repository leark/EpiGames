import React from 'react';
import GameCarousel from './GameCarousel';
import MainGameList from './GameList';
import NewGameForm from './NewGameForm';
import GameDetail from './GameDetail';
import UpdateGameForm from './UpdateGameForm';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedGame: null,
      editing: false,
      mainGameList: [
        {
          title: 'It is an Ad',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196212534911026/ikg080z6j7141.jpg',
          rating: 0.6,
          price: 5,
          featured: false,
          platforms: 'Switch',
          id: 'kwnxoi',
        },
        {
          title: 'Invader Membrane',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196805668208740/Y_n.png',
          rating: 4.5,
          price: 7,
          featured: true,
          platforms: 'PC',
          id: 'oi21jxl',
        },
        {
          title: 'Preist Mouse',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017197039433564200/Screenshot_20220606-084236.png',
          rating: 4.1,
          price: 2,
          featured: false,
          platforms: 'PC/Mac',
          id: 'mciowh24',
        },
        {
          title: 'Final Donkey 7',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196805362032680/Screenshot_20210117-1954312.png',
          rating: 2.1,
          price: 20,
          featured: true,
          platforms: 'PlayStation',
          id: 'enklxxi',
        },
        {
          title: 'Carby\'s Adventure',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017197197789515856/Kirby-and-the-Forgotten-Half-Car.png',
          rating: 2.7,
          price: 15,
          featured: false,
          platforms: 'Switch',
          id: 'qtvbx',
        },
        {
          title: 'Rosarama and Sad Star',
          img: 'https://cdn.discordapp.com/attachments/819377569715191818/1017196806062493746/IllSmashWithYou.jpeg',
          rating: 4.4,
          price: 34,
          featured: false,
          platforms: 'Switch',
          id: 'hwecver',
        },
      ],
    };
    this.handleShowForm = this.handleShowForm.bind(this);
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleAddingNewGameToList = (newGame) => {
    const newMainGameList = this.state.mainGameList.concat(newGame);
    this.setState({ mainGameList: newMainGameList });
  };

  handleDeletingGame = (id)  => {
    const newMainGameList = this.state.mainGameList.filter(game => game.id !== id);
    this.setState({
      mainGameList: newMainGameList,
      selectedGame: null
    });
  }

  handleShowForm = () => {
    if (this.state.selectedGame === null) {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    } else {
      this.setState({
        formVisibleOnPage: false,
        selectedGame: null,
        editing: false
      });
    }
  };

  handleChangingSelectedGame = (id) => {
    const selectedGame = this.state.mainGameList.filter(game => game.id === id)[0];
    this.setState({selectedGame: selectedGame});
  };
  
  handleEditingGameInList = (gameToEdit) => {
    const editedMainGameList = this.state.mainGameList.filter(game => game.id != this.state.selectedGame.id).concat(gameToEdit);
    this.setState({
      gameList: editedMainGameList,
      editing: false,
      selectedGame: null
    });
  }

  render() {
    let currentlyVisibleState = false;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <UpdateGameForm game = {this.state.selectedGame} onEditGame = {this.handleEditingGameInList} />
      buttonText = "Return to Game List";}
      else if (this.state.selectedGame != null) {
      currentlyVisibleState = <GameDetail game = {this.state.selectedGame} onClickingDelete = {this.handleDeletingGame} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Game List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewGameForm onNewGameCreation={this.handleAddingNewGameToList} />
      );
      buttonText = 'Return to Game List';
    } else {
      currentlyVisibleState = <MainGameList gameList={this.state.mainGameList} onGameSelection={this.handleChangingSelectedGame} />;
      buttonText = 'Add Game';
    }
    return (
      <React.Fragment>
        <GameCarousel gameList={this.state.mainGameList} />
        <h4>This splits carousel stuff and game list</h4>
        {currentlyVisibleState}
        <button
          type='button'
          onClick={this.handleShowForm}
          className='btn btn-warning'
        >
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default GameControl;
