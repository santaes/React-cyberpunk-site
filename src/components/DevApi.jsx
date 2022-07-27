import React from 'react';
import Code from '../assets/code.jpg';
import PageSection from './PageSection';

const DevApi = () => {
  return (
    <PageSection
      name='developer API'
      title='Developer API'
      subtitle={`Angels that with clasp dreams nepenthe on this of is. Said and a my the.`}
    >
      {' '}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
        {/* left */}

        <div className='flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg'>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            commodi.
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            aperiam velit facere vero dignissimos modi?
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto
            rem voluptatum!
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
            tenetur harum voluptatibus repudiandae, pariatur laborum.
          </p>
        </div>
        {/* right */}
        <div className='w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0 lg:ml-8'>
          <img
            src={Code}
            alt='code'
            className='rounded-lg shadow-lg shadow-thBlue'
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
