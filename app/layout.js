import "./About.css";
import "./Desktop.css";
import "./Folder.css";
import "./Media.css";
import "./Note.css";
import "./Player.css";
import "./Sticky.css";
import "./Styles.css";
import "./Window.css";

export const metadata = {
  title: "Danish",
  description: "Danish's personal site.",
  metadataBase: new URL('https://os.danish.bio'),
};

export const viewport = {
  themeColor: "#1c01a0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
