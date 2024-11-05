import React , { Suspense, useRef }from 'react';
import { View, StyleSheet, Text } from 'react-native'; 
import { Canvas } from "@react-three/fiber/native";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei/native";
// import bmwModel from './assets/bmw.glb';

export default function App() {
  const imgUrl = 'https://firebasestorage.googleapis.com/v0/b/dev-foodworld3d.appspot.com/o/models%2FME5mEwCKz0en4CCGavx0DGrufCY2%2FBurger%202.glb?alt=media&token=eb09916d-47ee-4655-8b48-97e7bfc08304'

  function Model() {
    const { scene } = useGLTF(imgUrl);
    return <primitive object={scene} scale={[2, 2, 2]} />;
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>3D Model Viewer</Text>
        </View>
        <Canvas
            key={imgUrl}
            shadows
            camera={{ position: [5, 5, 10], fov: 30 }}
            style={{ width: "100%", height: "93%" }}
            >
            <color attach="background" args={["#ffffff"]} />
            <Suspense fallback={<Text>3D Model Loading...</Text>}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Model key={imgUrl} />
                <OrbitControls enableZoom={true} />
                <Environment preset="forest" />
            </Suspense>
        </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#2196F3', 
    width: '100%',
    paddingTop: 40,
    paddingBottom: 16,
    alignItems: 'center', 
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});
