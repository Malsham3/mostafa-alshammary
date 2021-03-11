import React from 'react'
import Foo from "../components/Foo";
import FooGlitch from "../components/FooGlitch"
import NavSection from "../components/NavSection";
import ContactCard from "../components/ContactCard";

function Header() {
    return (
        <div id="header">
            {/* <Foo/> */}
            <FooGlitch/>
            <NavSection/>
            <ContactCard/>
        </div>
    )
}

export default Header
