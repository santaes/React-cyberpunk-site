import React, { useState, useRef } from 'react';
import Video from '../assets/heroVideo.mp4';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import GradientBtn from '../components/GradientBtn';

const HeroSection = ({ isMenuShown, setIsMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };
  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className='flex items-end justify-center w-full h-screen text-center'>
      <video
        src={Video}
        ref={videoRef}
        loop
        muted
        autoPlay
        className='object-cover h-full w-full absolute -z-10'
      />
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? '' : 'bg-black/80 '
        } ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}
      >
        <h1 className='text-5xl lg:text-7xl'>Web 3.0</h1>
        <h1 className='text-5xl lg:text-7xl capitalize mb-12'>
          the <span className='text-thBlue font-bold'>future</span> is here
        </h1>

        <div className='flex flex-row justify-center items-center '>
          <GradientBtn className='capitalize ' title={'get batsol'} />
          <GradientBtn
            className='capitalize  lg:mx-12 mx-3'
            title={'products'}
          />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className='cursor-pointer hover:scale-110 duration-200 text-thBlue'
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className='cursor-pointer hover:scale-110 duration-200 text-thBlue'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
