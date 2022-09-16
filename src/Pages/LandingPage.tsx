import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { Navbar, Button } from "react-daisyui";

const Model = () => {
  const gltf = useGLTF("/space.glb");
  // @ts-ignore
  const { nodes } = gltf;
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet001_1.geometry}
          material={nodes.planet001_1.material}
        />
      </group>
    </group>
  );
};

const LandingPage = (props: any) => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <div className="flex absolute inset-x-0 top-0 w-full p-4 font-sans">
          <Navbar className="bg-base-100 rounded-box bg-grey-900">
            <div className="flex-1 ">
              <Button color="ghost" className="normal-case text-xl">
                SoftwareManufaktur
              </Button>
            </div>
            <div className="flex-none space-x-4">
              <Button
                onClick={() => {
                  props.scrollTo(2);
                }}
                color="ghost"
              >
                Projekte
              </Button>
              <Button color="ghost">Kontakt</Button>
            </div>
          </Navbar>
        </div>
        <div>
          <h1 className="flex absolute top-[25%] left-10 text-6xl font-bold leading-[5rem]">
            Digitale Services, Handgemacht, <br/> bei der Softwaremanufaktur
          </h1>
        </div>
        <div className="absolute top-20 right-0 h-5/6 w-4/6">
          <Canvas dpr={[1.5, 2]} linear shadows>
            <fog attach="fog" args={["#272730", 16, 30]} />
            <ambientLight intensity={0.75} />
            {/*@ts-ignore */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75}>
              <pointLight intensity={1} position={[-10, -25, -10]} />
              <spotLight
                castShadow
                intensity={2.25}
                angle={0.2}
                penumbra={1}
                position={[-25, 20, -15]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
            </PerspectiveCamera>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars radius={900} depth={50} count={1000} factor={20} />
          </Canvas>
          <div className="layer" />
          <Loader />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
