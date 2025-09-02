import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        #devtools-indicator,
        .nextjs-toast {
          display: none !important;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
