export default function RootLayout({ children }) {
    return (
        <div >
          <h1>This is inner layout   </h1>
          {children}
        </div>
    );
  }