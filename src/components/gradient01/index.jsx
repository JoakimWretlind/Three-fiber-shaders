import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useCallback } from "react";
import { Vector2, Color } from "three";

import fragmentShader from "./fragmentShader"
import vertexShader from "./vertexShader"

export const Gradient = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const mousePosition = useRef({ x: 0, y: 0 })

    const updateMousePosition = useCallback((e) => {
        mousePosition.current = { x: e.pageX, y: e.pageY }
    })

    const uniforms = useMemo(() => ({
        u_time: { value: 0.0 },
        u_mouse: { value: new Vector2(0, 0) },
        u_bg: { value: new Color("#FFAF7B") },
        u_colorA: { value: new Color("#fd1d1d") },
        u_colorB: { value: new Color("#833ab4") }
    }), [])

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition, false)
        return () => { window.removeEventListener("mousemove", updateMousePosition, false) }
    }, [updateMousePosition])

    useFrame((state) => {
        const { clock } = state

        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime()
        mesh.current.material.uniforms.u_mouse.value = new Vector2(
            mousePosition.current.x,
            mousePosition.current.y
        )
    })

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <planeGeometry args={[1, 1, 32, 32]} scale={1.5} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
                wireframe={false}
            />
        </mesh>
    )
}
