import React from 'react';
import { useRouter } from 'next/router';
// import Link from "next/link";
// import Hero from '../../components/hero';
// import Banner from '../../components/banner';
// import axios from "axios";

function Index(props) {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    return (
        <div className="mt-5">
        <div className="mt-5">single room</div>
        <div className="mt-5">single room{id}</div>
        </div>
    );
}

export default Index;