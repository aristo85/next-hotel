import React from 'react';
import Loading from '../../loading';
import Room from './room';
import Title from "../../services/title";

function FeaturedRooms({rooms}) {
    let featured;
    if(rooms) {
        featured = rooms.map(room => {
            return <Room key={room._id} room={room} />
        });
    }


    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="section-title">
                {/*<div />*/}
            </div>
            <div className="featured-rooms-center">
                {!featured ? <Loading /> : featured}
            </div>
        </section>

    );
}

export default FeaturedRooms;

