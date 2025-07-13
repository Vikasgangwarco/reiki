// app/login/layout.jsx
// export default function Layout({ children }) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         {children}
//       </div>
//     );
//   }
  
// app/(auth)/layout.jsx
// export const metadata = {
//   title: "Login | My App",
// };

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-100 flex items-center justify-center min-h-screen">
//         {children}
//       </body>
//     </html>
//   );
// }


// app/(auth)/layout.jsx
export const metadata = {
  title: "Login | My App",
};

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
}