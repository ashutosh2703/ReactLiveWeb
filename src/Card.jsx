import React from 'react';

function Card() {
  const img = `https://source.unsplash.com/400x300/`;
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;