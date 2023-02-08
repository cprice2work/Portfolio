
// import linkedinIcon from '../images/linkedin.png'


const Contact = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>Need Something? Let me know!</h1>
            <h1 className='pt-2 text-primary'>Let's Talk</h1>
            <div className="md:grid md:grid-cols-2 md:gap-4">
                <div>
                    <p className='text-white pt-10'>Phone Number: 256-848-0704</p>
                    <p className='text-white pt-4'>Give me call!!</p>
                </div>
                <div className='relative flex justify-center flex-col'>
                    <div className='pl-[10px] pt-[50px] text-center'>
                        <p className='text-primaru text-[20px] md:text-[40px]'>Email: cprice2work@gmail.com</p>
                    </div>
                    <div className='pl-[10px] pt-[10px] text-center'>
                    {/* <a href=""><img className='inline ml-[10px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]' src={linkedinIcon} alt="linkedin Icon" /></a>
                         */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;