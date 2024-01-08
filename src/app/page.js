
// import Image from 'next/image'
// import styles from './page.module.css'
// import Main from '../containers/Main'


// export default function Home() {
//   return (
//     <>
//         <Main  ></Main>
//     </>
//   )
// }
 
// pages/index.js (o donde tengas tu Home component)

import Image from 'next/image';
import styles from './page.module.css';
import Main from '../containers/Main';

export default function Home() {
  return (
        <Main />
  );
}

