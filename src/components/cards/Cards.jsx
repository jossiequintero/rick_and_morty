import Card from '../card/Card';
import './cards.css'
export default function Cards(props) {
   const { characters } = props;
   let cardList = characters.map((character)=>{
      return (<Card 
         name={character.name}
         species={character.species}
         gender={character.gender}
         image={character.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         key={character.name}
      >
      </Card>
      )})

   return (<div className='cards'>
      {cardList}
   </div>);
}
