import React, { Component, Animated } from 'react';
import Animation from 'lottie-react-native';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import FadeInView from '../../FadeInView';

export default class Splash extends React.Component {


    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Animation style={styles.animation}
                    loop={true}
                    ref={animation => { this.animation = animation; }}
                    source={require('../../JsonAnimation/Pinjump.json')}
                />
                <Text style={styles.splashLogo}>GitHub</Text>
                <FadeInView >
                    <Text style={styles.splashLogoSmall}>with React-Native</Text>
                </FadeInView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: -40,
        backgroundColor: '#0794FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    animation: {
        width: 250,
        height: 250
    },

    splashLogo: {
        marginTop: -40,
        color: 'white',
        fontSize: 44,
        fontWeight: 'bold'
    },

    splashLogoSmall: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }

});

