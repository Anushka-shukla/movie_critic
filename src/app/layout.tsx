
import "./globals.css";
import Home from "./components/Home";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Home/>
        
      </body>
    </html>
  );
}
