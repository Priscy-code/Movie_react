import backgroundImage from '../../assets/image/nett.jpg'

const Contact = () => {
    return (
        <div className="h-screen bg-cover bg-center flex justify-center object-cover "
        style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className=' bg-white bg-opacity-50 rounded-lg shadown-lg max-w-md mx-auto mt-20 items-center p-6 '>
                <h1 className='font-bold text-3xl text-center '>Get in Touch</h1>
                <p className='text-center text-gray-500 '>You can reach me anytime</p>

                <div className='flex space-x-4 mb-4  '>
                    <input type="text"
                    placeholder='First name'
                    className='rounded-full text-gray-100 border border-black' />

                    <input type="text" name="Last Name" 
                    placeholder='Last Name' 
                    className='rounded-full border text-gray-100 border border-black'/>

                </div>

                <div className='mb-4 '>
                    <input type="text" 
                    placeholder='Enter email'
                    className='rounded-full border border-black text-gray-100 w-full block p-2 ' />
                
                </div>

                <div className='mb-4'>
                     <input type="text"
                     placeholder='Tell me how i can help you ?'
                     className='rounded-lg w-full text-gray-800 block h-24 border-black border p-2 placeholder-top ' />
                </div>
                

            </div>

        </div>
    )
}

export default Contact;