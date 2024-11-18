import { useSelector } from "react-redux"
import "./ReadingList.css"
function ReadingList(){

    const readingList = useSelector(store => store.cart.items );
    console.log(readingList);

    return(
        <div>
            <h1 id="heading">My Reading List</h1>
            <div>
                {readingList.map(book => (
                    <>
                        <div className="my-readingList">
                            <div>
                                <img src={book.image} width="75px" height="75px" className="cover"/>
                            </div>
                            <div>
                                <h2>{book.title}</h2>
                                <h3>{book.author||book.authors}</h3>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}
export default ReadingList