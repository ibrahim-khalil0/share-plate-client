import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({slide}) => {
    const {title, next, prev, id, img, description} = slide
    return (
        <div id={id} className="carousel-item relative w-full">
          <div className="w-full relative">
            <img
              src={img}
              className="w-full h-full"
            />
            <div className='absolute top-0 h-full bg-[#000000b8] w-full text-white grid place-items-center text-center'>
              <div className='lg:w-1/2 w-2/3 space-y-6'>
                <h1 className='text-5xl md:text-7xl font-semibold tracking-wide'>{title}</h1>
                <p className='text-lg tracking-wide'>{description}</p>
                <Link to={'/'}><button className='secondary-bg px-8 py-3 rounded-md text-2xl mt-8 montserrat'>Donate Food</button></Link>
              </div>
            </div>
          </div>
          <div className="absolute flex right-5 bottom-6 gap-4">
            <a href={prev} className="btn btn-circle">
              ❮
            </a>
            <a href={next} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
    );
};

export default Slide;