import { useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();

  useEffect(() => {
    // Автоматический редирект на главную страницу приложения
    router.replace("/form-ui");
  }, [router]);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      fontFamily: "Arial, sans-serif" 
    }}>
      <div>🔄 Перенаправление на HR Builder...</div>
    </div>
  );
}

export default Index;
