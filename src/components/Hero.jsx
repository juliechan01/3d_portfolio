import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ED7EDC]'/>
          <div className='w-1 sm:h-80 h-40 magenta-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> 👋🏼 Hi, I'm 
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"> Julie</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am<span><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=30&pause=1000&color=ED7EDC&width=435&lines=a+full+stack+developer.;a+student+forever.;a+v+++i+++s+++i+++o+++n+++a+++r+++y+++.+++.+++.+" alt="Typing SVG" /></a></span>
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
            </div>
          </a>
      </div>
    </section>
  )
}

export default Hero;