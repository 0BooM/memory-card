class GameLogic {
  constructor(gameState, setters) {
    this.selectedPokemons = gameState.selectedPokemons;
    this.pokemons = gameState.pokemons;
    this.score = gameState.score;
    this.bestScore = gameState.bestScore;
    this.setSelectedPokemons = setters.setSelectedPokemons;
    this.setPokemons = setters.setPokemons;
    this.setScore = setters.setScore;
    this.setBestScore = setters.setBestScore;
    this.setGameLost = setters.setGameLost;
  }

  onClick = (pokemonName) => {
    this.checkResult(pokemonName);
    this.shuffleCards();
  };

  checkResult = (pokemonName) => {
    if (this.selectedPokemons.includes(pokemonName)) {
      this.setGameLost(true);
      setTimeout(() => this.setGameLost(false), 2000);
      this.setSelectedPokemons([]);
      this.setScore(0);
      this.updateBestScore();
    } else {
      this.setSelectedPokemons([...this.selectedPokemons, pokemonName]);
      this.setScore((prevScore) => prevScore + 1);
    }
  };

  // Fisher-yates shuffle
  shuffleCards = (pokemons = this.pokemons) => {
    const shuffled = [...pokemons];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.setPokemons(shuffled);
  };

  updateBestScore = () => {
    if (this.score > this.bestScore) this.setBestScore(this.score);
  };
}

export default GameLogic;