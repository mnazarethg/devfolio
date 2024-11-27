import 'bootstrap/dist/css/bootstrap.css';
import ProfileSumary from '../components/ProfileSumary';
import ProfileDescription from '../components/ProfileDescription';
import Technologies from '../components/Technologies';
import Resume from '../components/Resume.js'

function AboutMe() {

  return (
    <>
      <main className="main">
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-md-6">
                <ProfileSumary />
                <Technologies />
              </div>
              <ProfileDescription />
              <Resume />
            </div>  
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
