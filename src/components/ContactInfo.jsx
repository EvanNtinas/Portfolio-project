const ContactInfo = ({ icon, text }) => (
  <div className='flex items-center m-2'>
    {icon}
    <p className='ml-2'>{text}</p>
  </div>
);

export default ContactInfo;
