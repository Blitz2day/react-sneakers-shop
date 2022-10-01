function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-30">
          <div className = "d-flex align-center">
            <img width={40} height={40} src="/images/logo.png" alt="Logo"/>
            <div>
              <h3 className="text-uppercase">React sneakers</h3>
              <div className="opacity-5">Shop of best sneakers ever</div>
            </div>
          </div>
          <ul className="d-flex ">
            <li className="mr-30">
              <img width={18} height={18} src="/images/cart.svg" alt="Cart"/>
              <span>1205 dollars</span>
            </li>
            <li>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B"/>
                </svg>
            </li>
          </ul>
        </header>
        <div className="content p-30">
          <h1 className="mb-30">All sneakers</h1>
          <div className="d-flex flex-wrap"> 
            <div className="card">
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
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/2.png" alt="Sneakers" />
                <h5>Nike Air Max 270 Men's Running Shoes</h5>
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
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/3.png" alt="Sneakers" />
                <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>142 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/4.png" alt="Sneakers" />
                <h5>Puma X Aka Boku Future Rider sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>150 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/5.png" alt="Sneakers" />
                <h5>Under Armor Curry 8 Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>252 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/6.png" alt="Sneakers" />
                <h5>Nike Kyrie 7 Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>188 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/7.png" alt="Sneakers" />
                <h5>Jordan Air Jordan 11 Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>179 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/8.png" alt="Sneakers" />
                <h5>Nike LeBron XVIII Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>274 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/9.png" alt="Sneakers" />
                <h5>Nike Lebron XVIII Low Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>233 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/10.png" alt="Sneakers" />
                <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>142 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/11.png" alt="Sneakers" />
                <h5>Puma X Aka Boku Future Rider sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>150 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
            <div className="card">
                <img width={133} height={112} src="/images/sneakers/12.png" alt="Sneakers" />
                <h5>Nike Kyrie Flytrap IV Men's Sneakers</h5>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>188 dollars</b>
                  </div>
                  <button className="button">
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus"/>
                  </button>
                </div>
            </div>
          </div> 
        </div>
    </div>
  );
}

export default App;
