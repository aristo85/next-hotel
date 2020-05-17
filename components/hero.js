import React from 'react';

function Hero({ children, hero }) {
    return (
        <div>
            <header className={hero}>{children}</header>
            <style jsx>{`
.defaultHero, .roomsHero {
    background: url('images/defaultBcg.jpeg') center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.roomsHero {
    background-image: url('images/room-2.jpeg');
}
            `}</style>
        </div>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;