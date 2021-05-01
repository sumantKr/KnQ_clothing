import React from 'react';
import './homepage.scss'
export const HomePage = () => {
  return <div className="Homepage">
    <section className="row row-1">

      <div className="item jackets">
        <div>
          <h2>
            JACKETS
          </h2>
          <p>
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="item hats">
        <div>
          <h2>
            HATS
          </h2>
          <p>
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="item sneakers">
        <div>
          <h2>
           SNEAKERS
          </h2>
          <p>
            SHOP NOW
          </p>
        </div>
      </div>
    </section>
    <section className="row row-2">
      <div className="item men">
        <div>
        
          <h2>
            MEN
          </h2>
          <p>
            SHOP NOW
          </p>
        </div>
      </div>
      <div className="item women">
        <div>
          <h2>
            WOMEN
          </h2>
          <p>
            SHOP NOW
          </p>
        </div>
      </div>
    </section>
  </div>
}