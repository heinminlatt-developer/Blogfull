import Figure from "react-bootstrap/Figure";
import profile from "../assets/img/profile.jpg";

function Profile() {
  return (
    <div>
        <Figure>
      <Figure.Image width={171} height={180} alt="171x180" src={profile} />
      <Figure.Caption>Mika MAtikainen Apr 15, 2020 · 4 min read</Figure.Caption>
    </Figure>
    </div>
    
  );
}

export default Profile;
