import React, {Component} from 'react';
import { Container} from 'reactstrap';
import NavbarComponent from "../../navbar/NavbarComponent";
import HomeContent from "../../homeContent/HomeContent";
import Footer from "../../footer/Footer";


class Homepage extends Component {
    render() {
        return (
            <>
                <NavbarComponent/>
                <Container>
                    <HomeContent/>
                    <Footer/>
                </Container>


            </>
        );
    }
}

export default Homepage;