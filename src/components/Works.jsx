import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github, hackerrank, leetcode, linkedin } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects, myGithub, myLinkedIn, hackerRank, leetCode } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt options={{max:45, scale:1, speed:450}} className='bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full'>
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2x1'/>

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
    </motion.div>
  )
}

const Works = ({ index }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full-flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          The following projects showcase my skills & experience through real-world examples of my work. Each project is briefly described with links to the code repositories containing my code. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. If you would like to copy my work and make your own version of it, please fork the repo and be sure to give me credit. Thank you. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key = {`project-${index}`} index= {index} {...project} />
        ))}
      </div>

      <div className="w-full flex flex-col items-center justify-center">
          <div>
            <p className="mt-24 text-secondary text-[21px] max-w-3xl leading-[30px] text-center">
              Liking what you see so far? Feel free to also connect with me on GitHub & LinkedIn with the
              links below.
            </p>
          </div>

          <div className="w-full flex flex-wrap items-center justify-center">
            <Tilt variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
              <div
                className="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none mr-4"
                onClick={() => window.open(myGithub, "_blank")}>
                <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                  <img
                    src={github}
                    alt="source code"
                    className="w-[40px] h-[40px] object-contain rounded-full"
                  />
                  <p className="text-[21px] p-2">GitHub</p>
                </div>
              </div>
            </Tilt>

              <Tilt variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
                <div
                  className="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none mr-4"
                  onClick={() => window.open(myLinkedIn, "_blank")}>
                  <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                    <img
                      src={linkedin}
                      alt="source code"
                      className="w-[40px] h-[40px] object-contain rounded-full"
                    />
                    <p className="text-[21px] p-2">LinkedIn</p>
                  </div>
                </div>
              </Tilt>

              <Tilt variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
                <div
                  className="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none mr-4"
                  onClick={() => window.open(hackerRank, "_blank")}>
                  <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                    <img
                      src={hackerrank}
                      alt="source code"
                      className="w-[40px] h-[40px] object-contain rounded-full"
                    />
                    <p className="text-[21px] p-2">HackerRank</p>
                  </div>
                </div>
              </Tilt>

              <Tilt variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
                <div
                  className="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none"
                  onClick={() => window.open(leetCode, "_blank")}>
                  <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
                    <img
                      src={leetcode}
                      alt="source code"
                      className="w-[40px] h-[40px] object-contain rounded-full"
                    />
                    <p className="text-[21px] p-2">LeetCode</p>
                  </div>
                </div>
              </Tilt>
            </div>
        </div>
    </>
  )
}

export default SectionWrapper(Works, "");
