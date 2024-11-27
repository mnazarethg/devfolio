import photo from '../assets/images/profile-photo.jpg';

function ProfileSumary() {
  
  return (
    <>    
      <div className="row justify-content-between gy-4">
        <div className="col-lg-5">
          <img src={photo} className="img-fluid" alt=""></img>
        </div>
        <div className="col-lg-7 about-info">
          <p><strong>Nombre: </strong> <span>María Nazareth Monti Giménez</span></p>
          <p><strong>Perfil: </strong> <span>Desarrolladora Full Stack</span></p>
          <p><strong>Email: </strong> <span>mnazarethg@gmail.com</span></p>
          <p><strong>Teléfono: </strong> <span>+54 (351) 662-2417</span></p>
        </div>
      </div>
    </>
  );
};

export default ProfileSumary;