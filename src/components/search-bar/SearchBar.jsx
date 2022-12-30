import './search-bar.css'

export default function SearchBar(props) {
 return (
   <div className='search-bar'>
     <input className='input' type="search" placeholder='Nuevo personaje' />
     <button className='button' onClick={()=>props.onSearch('not fund id')}>Agregar</button>
   </div>
 );
}
