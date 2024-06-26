// import { Html, Head, Main, NextScript } from 'next/document';
// import { useEffect } from 'react';

// export default function Document() {

//   useEffect(() => {
//     const initialValue = document.body.style.zoom;

//     // Change zoom level on mount
//     document.body.style.zoom = "80%";

//     return () => {
//       // Restore default value
//       document.body.style.zoom = initialValue;
//     };
//   }, []);

//   return (
//     <Html lang="en">
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8" />
//         <title>OBS Technologia</title>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }



import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {


  return (
    <Html lang="en">
      <title>OBS Technologia</title>
      <Head>
        <meta content="width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

