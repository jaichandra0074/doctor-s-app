import Doctorcard from "./components/Doctorcard";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Adddoctor from "./components/Adddoctorfrom";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Section />
      </div>

      <div>
        <Adddoctor />
      </div>

      <div className='doctorcontainer'>
        <Doctorcard 
          name='hemateja' 
          specialization='psychology' 
          gender='female'
        />

        <Doctorcard 
          name='varun' 
          specialization='gynocology' 
          gender='male'
        />

        <Doctorcard 
          name='deekshidh' 
          specialization='psychology' 
          gender='male'
        />

        <Doctorcard 
          name='hemateja' 
          specialization='psychology' 
          gender='female'
        />

        <Doctorcard 
          name='hemateja' 
          specialization='psychology' 
          gender='female'
        />
      </div>
    </>
  );
}

export default App;