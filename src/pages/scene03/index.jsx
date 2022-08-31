import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Blob } from '../../components/blob01'

const Scene03 = () => {
    return (
        <Canvas style={{ height: "100vh" }} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Suspense fallback={null}>
                <Blob />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}

export default Scene03