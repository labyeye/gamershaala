import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { SafeAreaView, StyleSheet } from 'react-native';

const Victor = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
            </Canvas>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export default Victor;
