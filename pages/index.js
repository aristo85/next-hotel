import React, { useState } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import Link from "next/link";
import Services from '../components/services'
// import axios from 'axios';
import FeaturedRooms from "../components/rooms/featured/featuredRooms";
import { getFeaturedRooms } from "../store/rooms";

export async function getServerSideProps() {
    const rooms = await getFeaturedRooms();
    return {
        props: {
            rooms
        },
    }
}
function Index({rooms}) {
    return(
        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link href="/rooms">
                        <button className="btn-primary">our rooms</button>
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms rooms={rooms} />
        </div>
    )
}

export default Index;
