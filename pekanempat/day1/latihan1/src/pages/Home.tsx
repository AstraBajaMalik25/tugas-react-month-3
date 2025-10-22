
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // ✅ import this hook

export default function Home() {
  const navigate = useNavigate(); // ✅ call the hook here

  const handleGetStarted = () => {
    navigate("/calendar"); // ✅ now this works
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Productive</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Manage your tasks, events, and projects all in one place.
      </p>

      <Button size="lg" onClick={handleGetStarted}>
        Get Started
      </Button>
    </div>
  );
}
