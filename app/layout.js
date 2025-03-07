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
  title: "Sonoma",
//   description: "After creating [FigCV](https://read.cv/sites/templates/f05h8yxhy), [Julius Tarng](https://read.cv/tarngerine) had a great idea for a template based on MacOS but didn't have the time to build it. So I tried to do the idea justice and came up with this.

// Sonoma features a fun and familiar presentation of your work and experiences, while also playfully supporting your status updates and a custom music player.

// Sonoma is made to be highly customizable, just like your real desktop. We have a [video tutorial on customization available here](https://www.youtube.com/watch?v=QJPQrMIYOXk).

// To change your background image, open the Media Manager and scroll to "backdrop.jpg". Hit the three dot button and click replace to upload your own background image.

// To change the song and artwork behind the "Listen" app, replace "soundtrack.mp3" and "soundtrack-cover.jpg" in the media manager.

// Lastly, to change the appearance of the toolbar or music player, open SiteSettings in the editor and change the values from “light” to “dark”.",
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
