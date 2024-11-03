import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const imgUrl = "https://firebasestorage.googleapis.com/v0/b/dev-foodworld3d.appspot.com/o/models%2FrlIXPV00gGda4HLAWYxdj4kKK2O2%2FBurger%202.glb?alt=media&token=d02f444e-7fce-44ca-81ed-e99702d26295"
  
  function Model(imgUrl) {
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
            <Suspense fallback={null}>
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
    paddingTop: 40,
    paddingBottom: 16,
    alignItems: 'center', 
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});
