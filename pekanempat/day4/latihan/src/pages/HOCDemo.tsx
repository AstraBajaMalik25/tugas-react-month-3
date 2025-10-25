import { useState, useEffect, type ComponentType, type FC, createContext, useContext, type ReactNode } from "react";

// ----------------------
// 1️⃣ Context for Global Data
// ----------------------
interface ProfileData {
  name: string;
  description: string;
}

const ProfileContext = createContext<ProfileData | undefined>(undefined);

function ProfileProvider({ children }: { children: ReactNode }) {
  const profile: ProfileData = {
    name: "Baja Malik 😹",
    description: "custom HOC Demonstration",
  };

  return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
}

function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw new Error("useProfile must be used within ProfileProvider");
  return context;
}

// ----------------------
// 2️⃣ HOC with Loading (TypeScript-safe)
// ----------------------
function withLoading<T extends object>(WrappedComponent: ComponentType<T>): FC<T> {
  return (props: T) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-[200px] text-zinc-400">
          Loading...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

// ----------------------
// 3️⃣ Component Using Global Data
// ----------------------
function ProfileCard() {
  const { name, description } = useProfile();

  return (
    <div className="bg-zinc-800/60 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

// Wrap component with HOC
const EnhancedProfile = withLoading(ProfileCard);

// ----------------------
// 4️⃣ Main App / Demo
// ----------------------
export default function HOCDemo() {
  return (
    <ProfileProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-white">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Custom HOC Example</h1>
          <EnhancedProfile />
        </div>
      </div>
    </ProfileProvider>
  );
}
