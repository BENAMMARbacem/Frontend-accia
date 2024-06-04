import { Img } from 'components';
import React from 'react'

const Banner = (props) => {
  return <>
  <section className="bg-white dark:bg-gray-900">
    <div className="grid grid-cols-2 max-w-screen-xl px-2 py-2  mx-auto gap-8 lg:mt-4 lg:mx-4  ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <Img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section></>;
};
export default Banner;