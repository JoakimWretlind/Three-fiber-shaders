import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";

import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'

export const Blob = () => {
    const mesh = useRef();
    const hover = useRef(false);

    // WHEN NOT HOVERED
    const uniforms = useMemo(
        () => ({
            u_intensity: {
                value: 0.3,
            },
            u_time: {
                value: 0.0,
            },
        }),
        []
    );

    /* We lerp between the base value of our u_intensity uniform and
    its final value, when hovered, to ease the transition between
    these two values in the useFrame hook. */
    // WHEN HOVERED!!!
    useFrame((state) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.15,
            0.02
        );
    });

    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            scale={1.5}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronGeometry args={[2, 20]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    )
}
