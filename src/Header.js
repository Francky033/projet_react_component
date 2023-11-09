// function Header() {
//     return(<header>
//         <h1>Mes Poneys</h1>
//         <nav>
//             <ul>
                
//                 <li>Menu1</li>
//                 <li>Menu2</li>
//                 <li>Menu3</li>
//             </ul>
//         </nav>
//     </header>
//     );
// }

// export default Header;

//----------------------------------------------

import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <header className="flex-center">
      <h1>Le blog sur les plus beaux abris-bus de France</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Contact</li>
          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
}

export default Header;