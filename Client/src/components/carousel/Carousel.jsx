import bathroom from '../../assets/bathroom.png'
import cleaning from '../../assets/cleaning.png'
import electric from '../../assets/electric.png'
import general from '../../assets/general-repairs.png'
import painting from '../../assets/painting.png'
import plumbing from '../../assets/plumbing.png'
import tiling from '../../assets/Tiling.png'
import woodwork from '../../assets/Woodwork.png'
import SkillCarousel from 'simple-react-carousel';

const Carousel = () => {
  return (
    <div className= 'h-64 lg:mx-96 py-5 my-5 font-bold text-center font-sans-serif text-3xl container-mx-auto'>
      Services We Offer
      <br></br>
    <SkillCarousel 
      autoPlay='true'
      autoChangeTime='5'
     >
      
        {/* <div className='relative'>
          <img className='h-full object-center object-cover' src={bathroom} alt="bathroom" /> 
            <div className='absolute top-20 left-0 right-0 opacity-90'>
              <h2 className= 'text-xl font-bold'>
                Bathroom
              </h2>
            </div>
        </div> */}
      
      <img className='' src={bathroom} alt="bathroom" />
      <img className='' src={plumbing} alt="plumbing" />
      <img className='' src={tiling} alt="tiling" /> 
      <img className='' src={electric} alt="electric" />
      <img className='' src={general} alt="general" />
      <img className='' src={woodwork} alt="woodwork" />
      <img className='' src={cleaning} alt="cleaning" />
      <img className='' src={painting} alt="painting" />
      
    </SkillCarousel>
    </div>
  );
};

export default Carousel;