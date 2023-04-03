// import {useEffect, useState} from 'react'
// import Link from 'next/link'
// // import { marketplaceDropdown, resourcesDropdown } from './NavItems'
// import { Button, IconButton } from '@mui/material'
// import { ArrowBack } from '@mui/icons-material'

// const MobileNavDrawer = ({drop, switcher}) => {
//   const [listType, setListType] = useState(null)

//   useEffect(() => {
//     if (drop === 'Marketplace') {
//       setListType(marketplaceDropdown)
//     } else if (drop === 'Resources') {
//       setListType(resourcesDropdown)
//     }
//   }, [drop])

//   return (
//     <>
//       {listType ? 
//         <div className=''>
//           <div>
//             <Button 
//               onClick={() => switcher(false)}>
//                 <ArrowBack />
//             </Button>
//           </div>
        
//           <ul className='mt-8 submenu mb-20'>
            
//             { listType.map(item => {
//               return (
//                 <li key={item.id}>
//                   <Link href={item.path}>
//                     <div className={`${item.cName} hover:bg-teal-300 hover:text-black`}>
//                       {item.title}
//                     </div>
//                   </Link>
//                 </li>
//               )
//             }) }
//           </ul>
//         </div>
//       : <div></div>}
//     </>
//   )
// }

// export default MobileNavDrawer