import React from 'react';
import Container from '../layout/Container';
import Recipes from './Recipes';
import BestSellers from './BestSellers';
import Space from '../elements/Space';
import HeatLevels from './HeatLevels';

const Home = ({ }) => {

    return (
        <Container center>
            <BestSellers />
            <Space md />
            <HeatLevels />
            <Space lg />
            <Recipes />
            <Space lg />
        </Container>
    )
}

export default Home;
