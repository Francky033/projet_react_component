import { Link } from "react-router-dom";

function ProfileMenu() {
    const profile = {
      firstname: "David",
      lastname: "Robert",
    };
  
    return (
      <li><Link to = "/profile"> {profile.firstname} {profile.lastname}</Link>
       

      </li>
    );
  }
  
  export default ProfileMenu;