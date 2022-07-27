import React from 'react';
import PageSection from './PageSection';
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className='text-white' />,
      title: 'rocket manufacturing',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi fugit esse commodi facere, totam recusandae veniam quasi asperiores facilis minus deserunt necessitatibus id ut?',
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className='text-white' />,
      title: 'advanced electronics',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis consequatur harum praesentium, inventore eos voluptatibus. Eos recusandae necessitatibus temporibus, facilis illum explicabo harum iusto facere excepturi?',
    },
    {
      id: 3,
      icon: <FaRobot size={50} className='text-white' />,
      title: 'robotics',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reiciendis sed enim numquam, laborum deleniti modi dolorem asperiores at non id saepe iste, dolorum quo consectetur molestiae, accusantium adipisci porro.',
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className='text-white' />,
      title: 'payload to orbit',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem omnis asperiores temporibus, culpa eum, sunt deserunt magnam impedit debitis nam architecto! Laboriosam dicta deleniti voluptates.',
    },
  ];
  return (
    <PageSection
      name='products'
      title={'Products'}
      subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite..`}
    >
      <div className='grid lg:grid-cols-2 gap-12 text-black'>
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className='group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center'
          >
            <div className='flex items-center justify-center duration-300 group-hover:scale-110'>
              <div className='bg-black rounded-full p-5 m-4'>{icon}</div>
            </div>
            <h1 className='text-3xl lg:text-5xl my-8 capitalize'>{title}</h1>
            <p className='text-lg'>{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
