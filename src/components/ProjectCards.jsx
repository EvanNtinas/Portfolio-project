const ProjectCards = (props) => {
  const { image, title, description, linkText, linkUrl, liveText } = props;

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
      <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
        <img className='w-full h-48 object-cover' src={image} alt='Project' />
      </a>
      <div className='p-5'>
        <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <p className='mb-3 text-gray-700 dark:text-gray-400'>{description}</p>
        <a
          href={linkUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          {linkText}
        </a>
        {/* <a
          href={linkUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          {liveText}
        </a> */}
      </div>
    </div>
  );
};

export default ProjectCards;
