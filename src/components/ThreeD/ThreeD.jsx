import React, { Component, useState, useRef, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls, Sphere } from 'drei';
import { a, useSpring } from 'react-spring/three';


const ThreeDContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

function Cube(props) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <a.mesh
      {...props}
      ref={ref}
      castShadow={true}
      receiveShadow={true}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />/
      <meshPhongMaterial
        flatShading={true}
        roughness={1}
        metalness={0.5}
        shininess={100}
        attach="material"
        color="red"
      />
    </a.mesh>
  );
}

function Plane() {
  return (
    <mesh
      receiveShadow={true}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, -5]}
    >
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshPhongMaterial attach="material" color="#D3D3D3" />
    </mesh>
  );
}

function Scene({topics}) {
  return (
    <>
      <ambientLight />
      <spotLight castShadow={true} intensity={0.6} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        {/* // TODO:Render primatives here and Set position and rotation details here */}
        <Cube rotation={[10, 10, 0]} position={[0, 0, 0]} />
        {/* <Sphere position={[2, 0, 0]}>
          <meshBasicMaterial attach="material" color="blue" />
        </Sphere> */}
      </Suspense>
      <Plane />
      <OrbitControls />
    </>
  );
}

class ThreeD extends Component {
  state = {};
  render() {
    const {topics} = this.props
    return (
      <ThreeDContainer>
        <Canvas>
          <Scene topics={topics} />
        </Canvas>
      </ThreeDContainer>
    );
  }
}

export default ThreeD;
