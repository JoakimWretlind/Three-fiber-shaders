import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three"

import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'

export const MovingPlane = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_colorA: { value: new Color("#ffb67b") },
            u_colorB: { value: new Color("#D76D77") },
        }), []
    );

    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
        <>
            <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
                <planeGeometry args={[1, 1, 16, 16]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={false}
                />
            </mesh>

        </>
    )
}
