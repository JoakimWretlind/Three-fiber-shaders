import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Gradient } from '../../components/gradient01'

const Scene04 = () => {
    return (
        <Canvas style={{ height: "100vh" }} camera={{ position: [0.0, 0.0, 1.5] }}>
            <Suspense fallback={null}>
                <Gradient />
            </Suspense>
        </Canvas>
    )
}

export default Scene04