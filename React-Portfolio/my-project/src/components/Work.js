const Work = () => {
    return (
        <>
            <h1 className='drop-shadow-md text-primary md:text-[70px]'>Check out some of my work!</h1>
            <h2 className='pt-2 text-primary'>I Have been having alot of fun with THREE.js and React3Fiber but did you know I also make games, I know COBOL, and I make my own Cooking videos!</h2>
            <div>
                <div>
                    <p className='text-white pt-10'></p>
                    <p className='text-white pt-4'></p>
                </div>
                <p className='relative flex justify-center text-white pt-10'>Below is a Partcles effects manipulator that you can use to play around with different design useing a build it GUI-for bebugging</p>
                <div className='relative flex justify-center'> 
                    <iframe 
                        className=' p-1 bg-border mt-10'
                        width="1024px"
                        height="670px"
                        src="https://qwinks-resume.vercel.app"/>;
                </div>
                <p className='relative flex justify-center text-white pt-10'>The power of THREE.js is tuely astounding, here is a very simple example of a website, that is live, on my website! Inside of this website two other website both fully interactable with active sites inside of them!! Websiteception </p>
                <div className='relative flex justify-center'>
                    <iframe 
                        className=' p-1 bg-border mt-10'
                        width="1024px"
                        height="670px"
                        src="https://christian-price-resume.vercel.app"/>;

                </div>

                <div className='relative flex justify-center'>
                <a href="url">https://cprice2work.itch.io/awesomegame</a>
                       
                       

                </div>
            </div>
        </>
    )
}

export default Work;