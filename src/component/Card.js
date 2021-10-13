import {Component} from "react"

class Card extends Component {
    //Controllare se la data e orario è successiva al giorno corrente
    checkDateToday(date){
        var todayDate = new Date()
        if(date > todayDate)
            return(date.getTime() > todayDate.getTime());
        else
            return(false);
    }
    //Se la funzione "checkDateToday()" torna true stampa l'etichetta DA NON PERDERE
    renderNewTag(){
        const cardsDate = new Date(this.props.card.date);

        if(this.checkDateToday(cardsDate)){
            return(
                <div className = "new">Da non perdere</div>
            )
        }
    }

    render() {
        let image;

        return (
            image = require('../image/' + this.props.card.image.substr(32)).default,
            <div className = "card" tag = {this.props.card.tags}>
                    <img className = "img" src={image} alt="" />
                    {this.renderNewTag()}
                <div className = "infoBox">
                    <div className = "description">
                        <div className = "title">{this.props.card.title}</div>
                        <div className = "text">{this.props.card.description}</div>
                    </div>
                    <div className = "like" onClick = {() => this.props.onLike(this.props.card)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16.5 3c-1.74 0-3.24.99-3.56 2.36h-1.87C10.54 4.99 3.04 3 4.5 9 5.5 5 2 4.5 4 9.5c0 5.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 22 8.5c0-2-1.5-3.5-3.5-3.5z" opacity = {this.props.card.like}/>
                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                        </svg>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Card;

