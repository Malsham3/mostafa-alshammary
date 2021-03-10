import React from 'react';
import Foo from "../components/Foo";
import FooGlitch from "../components/FooGlitch"
import NavSection from "../components/NavSection";
import ContactCard from "../components/ContactCard";

function HomePage() {
    return (
        <div id="home-page">
            {/* <Foo/> */}
            <FooGlitch/>
            <NavSection/>
            <ContactCard/>
        </div>
    )
}

export default HomePage
