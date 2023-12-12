import Styles from './styles/App.css'

function ItemListContainer({ greeting }) {
    return (
        
        <div className={Styles.itemListContainer}>
            <p className="parrafo" >{greeting}</p>
        </div>
    )
}

export default ItemListContainer;
