function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
                <div className="drawer-block">
                    <h2 className="mb-30 d-flex justify-between">Cart <img className="cu-p" src="/images/button-remove.svg" alt="remove"/></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/images/sneakers/1.png)'}} className="cartItemImg">
                        </div>
                        <div className="mr-20 flex">
                        <p className="mb-5">Nike Blazer Mid Suede Men's Sneakers</p> 
                        <b>216 dollars</b>
                        </div>
                        <img className="removeBtn" src="/images/button-remove.svg" alt="remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/images/sneakers/2.png)'}} className="cartItemImg">
                        </div>
                        <div className="mr-20 flex">
                        <p className="mb-5">Nike Air Max 270 Men's Running Shoes</p> 
                        <b>216 dollars</b>
                        </div>
                        <img className="removeBtn" src="/images/button-remove.svg" alt="remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                <ul >
                    <li>
                    <span>Total: </span>
                    <div></div> 
                    <b>432 dollars</b>
                    </li>
                    <li>
                    <span>Tax 17%: </span>
                    <div></div> 
                    <b>61.90 dollars</b>
                    </li>
                </ul>
                <button className="greenButton">Make order <img src="/images/arrow.svg" alt="arrow"/></button>
                </div>
                </div>
        </div>
    )
}

export default Drawer;