import Hero from "../../components/hero";
import Banner from "../../components/banner";
import Link from "next/link";

export default function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link href="/">
                    <button className="btn-primary">return home</button>
                </Link>
            </Banner>
        </Hero>
    )
}