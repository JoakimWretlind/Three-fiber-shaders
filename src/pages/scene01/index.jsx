import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Cube01 } from '../../components/cube01'

const Scene01 = () => {
    return (
        <Canvas style={{ height: "100vh" }} camera={{ position: [1.0, 1.0, 1.0] }}>
            <Suspense fallback={null}>
                <Cube01 />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}

export default Scene01