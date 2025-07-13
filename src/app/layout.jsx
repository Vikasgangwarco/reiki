// app/layout.jsx
// import './globals.css'; 

// export default function RootLayout({ children }) {
//     return (
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     );
//   }
  
import "./globals.css";
import { poppins, roboto, playfair } from './fonts';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} ${playfair.variable}`} >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
