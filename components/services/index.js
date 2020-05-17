import React, {useState} from 'react';
import Title from "./title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

function Index(props) {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail/>,
            title: "Free cocktail",
            info: 'lets see whats going on herelets see whats going on herelets see whats going on here'
        },
        {
            icon: <FaHiking/>,
            title: "Prof Hiking",
            info: 'lets see whats going on herelets see whats going on herelets see whats going on here'
        },
        {
            icon: <FaBeer/>,
            title: "Best Beer",
            info: 'lets see whats going on herelets see whats going on herelets see whats going on here'
        },
        {
            icon: <FaShuttleVan/>,
            title: "free shuttle",
            info: 'lets see whats going on herelets see whats going on herelets see whats going on here'
        }
    ])
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                })}
            </div>
        </section>
    );
}

export default Index;