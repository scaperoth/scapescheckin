import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyFooter({ customStyles }) {
    return (
        <View style={customStyles}>
            <View style={{ backgroundColor: '#fff', height: 160 }}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <Path fill="#e2eafc" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,112C840,85,960,107,1080,138.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></Path>
                </Svg>
            </View>
        </View>
    );
}