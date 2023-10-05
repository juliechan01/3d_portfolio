import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  // 11vTtZu8sSOvU1Q6r
// template_9viq08j
// service_ii800lp

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_ii800lp',
      'template_9viq08j',
      {
        from_name: form.name,
        to_name: 'Julie',
        from_email: form.email,
        to_email: 'juliechan03@gmail.com',
        message: form.message
      },
      '11vTtZu8sSOvU1Q6r'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you! I will get back to you as soon as I can.');

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (err) => {
      setLoading(false)
      console.log(err)
      alert('Something went wrong. Please try again later.')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='John Appleseed' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='johnappleseed@gmail.com' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder='What would you like to say? Feel free to let me know here if you would like a copy of my resume!' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");