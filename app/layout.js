import "./About.css";
import "./Desktop.css";
import "./Folder.css";
import "./Media.css";
import "./Note.css";
import "./Player.css";
import "./Sticky.css";
import "./Styles.css";
import "./Window.css";
import { ShaderGradient } from './components/ShaderGradient'

export const metadata = {
  metadataBase: new URL('https://os.danish.bio'),
  title: "Danish",
  description: "Danish's personal site.",
  openGraph: {
    title: "Danish",
    description: "Danish's personal site.",
    url: 'https://os.danish.bio',
    siteName: 'Danish',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1
        }}>
          <ShaderGradient />
        </div>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
