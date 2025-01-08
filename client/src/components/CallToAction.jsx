import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col p-6 md:p-8 lg:p-10 border border-teal-500 justify-center items-center rounded-xl text-center gap-6 bg-teal-50 shadow-md'>
      {/* For Mobile: Text and Image Stack, For Desktop/Laptop: Text on Left and Image on Right */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-7xl">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start max-w-xs mx-auto md:max-w-md lg:max-w-lg text-center md:text-left">
          <h2 className='text-lg md:text-2xl font-semibold text-teal-800'>
            Want to Explore the Tech World?
          </h2>
          <p className='text-gray-600 my-3 text-sm md:text-base'>
            Discover the latest tech resources and insights on TechShelf.
          </p>
          <Button 
            gradientDuoTone='purpleToPink' 
            className='px-5 py-2 text-sm md:text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-all'>
            <a
              href="https://techshelf-antech.onrender.com/"
              target='_blank'
              rel='noopener noreferrer'
              className="text-white"
            >
              Explore TechShelf
            </a>
          </Button>
        </div>

        {/* Image Section */}
        <div className="p-3 w-full max-w-xs mx-auto md:max-w-lg lg:max-w-xl">
          <img
            src="https://enterprisersproject.com/sites/default/files/2022-11/CIO_books_technology_2022.png"
            alt="TechShelf Resources"
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>

      {/* Additional Section */}
      <div className="text-sm text-gray-500 mt-4">
        <p>Join a community of passionate learners and innovators.</p>
      </div>
    </div>
  );
}
