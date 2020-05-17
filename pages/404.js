import Hero from "../components/hero";
import Banner from "../components/banner";
import Link from "next/link";

export default function Custom404() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link href="/">
                    <button className="btn-primary">return home</button>
                </Link>
            </Banner>
        </Hero>
    )
}