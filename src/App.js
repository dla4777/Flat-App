import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from '../src/navigations/Tab';
import StackNavigation from "./navigations/MyPageStack";
import Stack from "./navigations/MyPageStack";

const Container = styled.View`
  flex: 1;
  background-color: #101010;
  justify-content: center;
  align-items: center;
`;

const App = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
};

export default App;
