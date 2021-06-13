import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({ customStyles }) {
    return (
        <View style={customStyles}>
            <View style={{ backgroundColor: '#fff', height: 160 }}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <Path fill="#e2eafc" fill-opacity="1" d="M0,320L120,272C240,224,480,128,720,106.7C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></Path>
                </Svg>
            </View>
        </View>
    );
}