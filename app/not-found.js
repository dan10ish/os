"use client";

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <h2>404 - Page Not Found</h2>
      <a href="https://os.danish.bio">Go back to the home page</a>
    </div>
  );
} 