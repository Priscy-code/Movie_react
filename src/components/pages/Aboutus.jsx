import Priscy from '../../assets/image/priscy.jpeg';
import { FaLinkedin } from 'react-icons/fa';


const Aboutme = () => {
    return (
        <div className='container mx-auto p-5 flex md:felex-row item-center'>

            <div className='md:w-1/2 mb-5 md:mb-0 flex justify-center'>
                <img src={Priscy} alt="About Me" className='rounded-lg shadow-lg w-full h-auto object-cover max-w-sm' />
            </div>

            <div className='w-1/2 pl-5'>
                <h1 className='text-3xl font-bold mb-4'>Akwetey Priscilla</h1>

            <h2 className='font-bold text-2xl'>Frontend Developer </h2>

            <p className='text-lg'>Hello! I'm Akwetey Priscilla, a passionate software developer and UI designer with a focus on creating innovative solutions that make a difference. 
                I hold a degree in Business Information Systems from Valley View University, where I honed my skills in programming and design.</p>

            <h2 className='font-bold text-2xl'>My Journey</h2>
           < p className='text-lg'>Throughout my academic journey, I’ve developed a strong foundation in various programming languages, 
                including Flutter, JavaScript, and PHP, and I’m currently learning React to expand my skill set. I’ve had the opportunity to work on several exciting projects, 
                including a geofencing and location tracking application for child monitoring, an E-Pharmacy platform, 
                and a music app utilizing the Spotify API.</p>

            <h2 className='font-bold text-2xl'>My Passion</h2>
            <p>I am passionate about using technology to solve real-world problems and enhance user experiences. As the organizer of the Ladies in Tech club at my university, I am dedicated to empowering women in technology
                 and inspiring younger generations to pursue their interests in STEM fields.</p>
            
            <h2 className='font-bold text-2xl'>Future Aspirations</h2>
            <p className='text-lg'>My goal is to become a proficient software developer, continuously innovating and helping others believe in their potential. I aspire to create applications that not only meet users' 
                needs but also positively impact the community.</p>
            <h3 className='font-bold text-2xl space-x-4'>Connect with me: <a href="https://www.linkedin.com/in/akwetey-priscilla-0aa552268/" >
            <FaLinkedin/>
            </a>
            </h3>
            </div>
            
        </div>
    )
}
export default Aboutme;