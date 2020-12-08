import React, { Component, useState, useRef, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { OrbitControls, Sphere, Ring } from 'drei';
import { a, useSpring } from 'react-spring/three';

const ThreeDContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

// A Topic will be a Cube
function Topic(props) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <a.mesh {...props} ref={ref} castShadow={true} receiveShadow={true}>
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

function Scene({ topics }) {
  const startingXPos = -3;
  const spaceBetween = 3;
  const startingZPos = -2;
  return (
    <>
      <ambientLight />
      <spotLight castShadow={true} intensity={0.6} position={[0, 10, 4]} />
      <Suspense fallback={null}>
        {/* // TODO:Render primatives here and Set position and rotation details here */}
        {topics.map((topic, index) => (
          <>
            <Topic
              key={index}
              rotation={[10, 10, 0]}
              position={[(startingXPos + index) * spaceBetween, 0, 0]}
            />
            {topic.contents.map((content, index) => (
              <Sphere key={index} position={[(startingXPos + index) * spaceBetween, 0, startingZPos]}>
                <meshBasicMaterial attach="material" color="blue" />
              </Sphere>
            ))}
          </>
        ))}

        <Ring position={[2, 3, startingZPos]}>
          <meshBasicMaterial attach="material" color="orange" />
        </Ring>
      </Suspense>
      <Plane />
      <OrbitControls />
    </>
  );
}

class ThreeD extends Component {
  state = {};
  render() {
    const { topics } = this.props;
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
