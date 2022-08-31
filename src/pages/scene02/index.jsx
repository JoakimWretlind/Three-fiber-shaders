import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { MovingPlane } from '../../components/Plane01'

const Scene02 = () => {
    return (
        <Canvas style={{ height: "100vh" }} camera={{ position: [1.0, 1.0, 1.0] }}>
            <Suspense fallback={null}>
                <MovingPlane />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}

export default Scene02