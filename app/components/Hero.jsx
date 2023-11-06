import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className=" lg:text-6xl text-4xl text-white font-extrabold  mb-4">
            Hello,I'm Frank
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            As the first thing people see when they visit your website, a hero
            section is the area that immediately shows up on the screen under
            your logo ..
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-500 h-400 relative">
            <img
              src="images/about.png"
              alt="hero_img"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
