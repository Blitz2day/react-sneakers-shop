function Card() {
    return (
        <div className="card">
    <div className="favorite">
    <img src="/images/heart-unliked.svg" alt="unliked"/>
    </div>
    <img width={133} height={112} src="/images/sneakers/1.png" alt="Sneakers" />
    <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
        <span>Price:</span>
        <b>216 dollars</b>
        </div>
        <button className="button">
        <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
        </button>
    </div>
</div>
    );
}

export default Card;

