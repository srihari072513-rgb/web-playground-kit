import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RotatingCubes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cubes = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      scale: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      color: ["#7c3aed", "#6366f1", "#8b5cf6", "#a78bfa", "#4f46e5"][i % 5],
    }));
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} index={i} />
      ))}
    </group>
  );
};

const FloatingCube = ({
  position,
  scale,
  speed,
  color,
  index,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * speed * 10 + index;
      meshRef.current.rotation.z = t * speed * 8;
      meshRef.current.position.y =
        position[1] + Math.sin(t * speed * 5 + index) * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.35}
        wireframe={index % 3 === 0}
      />
    </mesh>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0a1a]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
          <pointLight position={[-10, -10, -5]} intensity={0.6} color="#6366f1" />
          <RotatingCubes />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#0a0a1a]/40 to-[#0a0a1a]/80" />

      {/* Login Form */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-full max-w-md transition-all duration-500"
          style={{
            boxShadow: hovered
              ? "0 0 60px rgba(124, 58, 237, 0.5), 0 0 120px rgba(99, 102, 241, 0.2)"
              : "0 0 30px rgba(124, 58, 237, 0.15)",
          }}
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {/* Glow ring */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.4), transparent 50%, rgba(99,102,241,0.4))",
                opacity: hovered ? 1 : 0.3,
              }}
            />

            <div className="relative z-10">
              <h1 className="mb-1 text-center text-3xl font-bold text-white tracking-tight">
                Welcome Back
              </h1>
              <p className="mb-8 text-center text-sm text-white/50">
                Sign in to continue
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-purple-400">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="group">
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-purple-400">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-[0.98]"
                >
                  Sign In
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-white/30">
                Don't have an account?{" "}
                <span className="cursor-pointer text-purple-400 transition-colors hover:text-purple-300">
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
