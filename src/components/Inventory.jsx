import {useState} from 'react'

const Inventory = () => {

const [books, setBooks] = useState(13)

const bookIncr = () => {
    setBooks(books+1)
} 
const bookDecr = () => {
    setBooks(books-1)
    if(books === 0){
        setBooks(0)
    }
} 

const [pens, setPens] = useState(10)

const penIncr = () => {
    setPens(pens+1)
} 
const penDecr = () => {
    setPens(pens-1)
    if(pens === 0){
        setPens(0)
    }
} 

const [notebook, setNotebook] = useState(44)

const notebookIncr = () => {
    setNotebook(notebook+1)
} 
const notebookDecr = () => {
    setNotebook(notebook-1)
    if(notebook === 0){
        setNotebook(0)
    }
}

const [inkpens, setInkpens] = useState(78)

const inkpenIncr = () => {
    setInkpens(inkpens+1)
} 
const inkpenDecr = () => {
    setInkpens(inkpens-1)
    if(inkpens === 0){
        setInkpens(0)
    }
} 

    return <>
        <div className="items">
            <span className="">Books : {books}</span>
            <button className="addBook"onClick={bookIncr}>+</button>
            <button className="remBook" onClick={bookDecr}>-</button>
            <span className="totalBooks">{books}</span>
         
            <span>Pens : {pens}</span>
            <button className="addPen"onClick={penIncr}>+</button>
            <button className="remPen" onClick={penDecr}>-</button>
            <span className="totalPens">{pens}</span>
            
            <span>Notebooks : {notebook}</span>
            <button className="addNotebook"onClick={notebookIncr}>+</button>
            <button className="remNotebook" onClick={notebookDecr}>-</button>
            <span className="totalNotebooks">{notebook}</span>
           
            <span>Inkpens : {inkpens}</span>
            <button className="addNotebook"onClick={inkpenIncr}>+</button>
            <button className="remNotebook" onClick={inkpenDecr}>-</button>
            <span className="totalNotebooks">{inkpens}</span>
        </div>
        <div className="total">
            {books+pens+notebook+inkpens}
        </div>
    </>
}

export default Inventory;