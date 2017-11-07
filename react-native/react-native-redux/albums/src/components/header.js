import React from 'react';
import { Text } from 'react-native';

const Header = () => {
    const { textStyle } = styles;
    return <Text style={textStyle}>albums!</Text>;
};

const styles = {
    textStyle: {
        fontSize: 50
    }
};

export default Header;
