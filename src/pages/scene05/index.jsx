import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Lamina } from '../../components/lamina01'

const Scene05 = () => {
    return (
        <Canvas style={{ height: "100vh" }} camera={{ position: [0.0, 0.0, 8.0] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.03} />
                <directionalLight position={[0.3, 0.15, 0.0]} intensity={2} />
                <Lamina />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}

export default Scene05