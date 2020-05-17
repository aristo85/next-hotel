import React from 'react';
import Link from "next/link";

function Room({room}) {
    const { type, title, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link href="/[id]" as={`${room._id}`}>
                    <button className="btn-primary room-link">Features</button>
                </Link>
            </div>
            <p className="room-info">{`${title} ${type}`}</p>
        </article>
    );
}

export default Room;