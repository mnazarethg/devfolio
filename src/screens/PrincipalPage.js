import { ReactTyped } from 'react-typed';
import '../stylesheets/PrincipalPage.css';
import photo from '../assets/images/hero-img.png';

function PrincipalPage() {

  return (
    <>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src={photo} alt="" data-aos="fade-in"></img>
          <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <h2>María Nazareth Monti Giménez</h2>
            <ReactTyped
              strings={["Desarrolladora Full Stack"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default PrincipalPage;
