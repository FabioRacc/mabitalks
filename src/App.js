import './scss/main.css';
import {Component} from "react";

import Navbar from './component/Navbar';
import Tags from './component/Tags';
import Card from './component/Card';

class App extends Component {
  //state dove contenere i dati sulle cards della REST API 
  constructor(props){
    super(props)
    //cards saranno tutte le cards che vengono visualizzate
    //originalCards sono invece tutte quante le carte
    this.state = {
      cards: [],
      originalCards: [],
      tags:[
        {id: 3000, name: "Design"},
        {id: 3001, name: "Development"},
        {id: 3002, name: "News"},
        {id: 3003, name: "R&D"}, 
        {id: 3004, name: "Presentation"},
      ],
    }
  }

  //Nel momento della creazione della classe App viene preso il contenuto della RESP API,
  //viene caricato all'interno dello state creato in precedenza
  componentDidMount() {
    //Per evitare la CORS policy nel file "package.json" ho impostato un proxy in quanto non funzionava l'header
    fetch('/react/')
    .then(res => res.json())
    .then((data) => {
      this.setState({cards: data})
      this.setState({originalCards: data})

      //Viene aggiunto un parametro (like) a tutte le cards 
      let copy = [];
      copy = this.state.cards;
      for (let i = 0; i < this.state.cards.length; i++) {
        copy[i]["like"] = 0;
      }
      this.setState({cards: copy})
    })
    .catch(console.log)
  }

  //Funzione per stampare le righe con le cards
  renderRows() {
    let card = this.state.cards;
    let completeRow = [], cards = [];
  
    card.forEach ((card, i) => {
      //Mette una Card all'interno dell'array cards per fino ad un massimo di 3
      cards.push(
          <Card 
          key = {card.id}
          card = {card}
          onLike = {this.handleLike}
          /> 
      );
  
      //Mette le 3 cards all'interno della riga e libera l'array per le nuove cards
      if((i+1) % 3 === 0) {
        completeRow.push(<div className ="row">{cards}</div>);
        cards = [];
      }
    });
    //Se ci sono carte rimaste all'interno dell'array le mette
    if(cards != null) {
      completeRow.push(<div className ="row">{cards}</div>);
      card = []; 
    }
    return completeRow;
  }
  //Filtra le cards in base al tag premuto
  handleFiltering = cardTag => {
    const cards = this.state.originalCards;
    const filteredCards = cards.filter(card => card.tags.includes(cardTag));
    this.setState({cards: filteredCards});
  }
  //Viene preso indice dell'array dove si trova la card al quale è collegato il like premuto
  //invertendo lo stato del like
  handleLike = card => {
    var cards = [...this.state.cards];
    var id = cards.indexOf(card);
    cards[id] = card;
    if(cards[id].like === 0)
      cards[id].like = 1
    else
      cards[id].like = 0
    this.setState({cards: cards});
  }

  render() {
    console.log(this.state)
    return (
      <>
      <Navbar />
      <div className = "header">Next on Mabitalks</div>
      <Tags 
      tag = {this.state.tags}
      onFiltering = {this.handleFiltering}
      />
      {this.renderRows()}
      </>
    )
  };
}

export default App;