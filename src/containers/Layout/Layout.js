import React from 'react';
import Aux from '../../hoc/Aux';

import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import WhatIUse from '../../components/WhatIUse/WhatIUse';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

export default function Layout (props) {
    return (
        <Aux>
            <Header />
            <About />
            <WhatIUse />
            <Portfolio />
            <Contact />
            <Footer />
        </Aux>
    )
}