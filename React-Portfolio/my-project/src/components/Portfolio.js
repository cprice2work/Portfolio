import InteractiveMenu from "./InteractiveMenu";


const Portfolio = () => {
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]">
        <h1 className="drop-shadow-md text-primary md:text-[90px]"><span className="text-[30px] font-normal">Hello, My name is</span><br /> Christian Price</h1>
        <p className="text-white mt-8 text-[20px]">Welcome to my site, If you would like for this to be an audio experience as well please click the Sound Icon at the bottom.
        </p>
        <p className="text-white mt-8 text-[20px]">Also this portfolio is update everyday so make sure to come back for more features and experiences!!
        </p>
      </div>
      <InteractiveMenu />
    </>
  );
}

export default Portfolio;