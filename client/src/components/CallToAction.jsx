import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center gap-6'>
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl'>
          Want to explore Tech World?
        </h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources on TechShelf
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
          <a
            href="https://techshelf-antech.onrender.com/"
            target='_blank'
            rel='noopener noreferrer'
          >
            TechShelf
          </a>
        </Button>
      </div>

      {/* Image Section */}
      <div className="p-3">
        <img
          src="https://enterprisersproject.com/sites/default/files/2022-11/CIO_books_technology_2022.png"
          alt="TechShelf Resources"
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}
