import { useRef } from "react";
import vertexShader from './vertexShader'
import fragmentShader from './fragmentShader'

export const Cube01 = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  )
}

// VERTEX SHADER
// The role of the vertex shader is to position each vertex of a geometry.
// In simpler terms, this shader function allows you to programmatically
// alter the shape of your geometry and, potentially, "make things move".

// FRAGMENT SHADER
// The role of the Fragment Shader is to set the color of each visible pixel
// of a geometry.This function sets the color in RGBA format, which we're
// already familiar with thanks to CSS (The only difference is that the values
// range from 0 to 1 instead of 0 to 255: 1.0, 1.0, 1.0 is white and
// 0.0, 0.0, 0.0 is black).

// Dynamic Shaders with uniforms and varyings
// So far, the shaders we saw are pretty static: we do not pass any external data,
// which is why we were only rendering some static colors and geometry.To make
// those dynamic, we need to add variables to our shaders and also be able to
// send data to the vertex and the fragment shader.This is where uniforms, varyings,
// and attributes come into the picture.

// Uniforms
// To pass data from your Javascript code into your shader, we need to use uniforms.A
// uniform acts as an input to both vertex and fragment shader
// To declare uniforms, we need to place them at the top of your shaders, preceded by
// the variable type: float vec2 mat3, etc.