import BannerPng from '../assets/fruits-splash.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/animation'

const Banner = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}
                <div className='flex justify-center items-center'>
                    <img src={BannerPng} alt="" className='w-[300px] md;max-w-[400px] h-full object-cover' />
                </div>
                {/* Brand Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-5xl font-bold uppercase'
                        >
                            {""}
                            Brand Info
                            <motion.p
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis.
                                Reiciendis ducimus architecto doloremque repudiandae saepe ab perferendis iure labore ea eligendi quo,
                                repellendus nemo doloribus delectus mollitia! Cupiditate, amet.
                            </motion.p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, perspiciatis.
                                Reiciendis ducimus architecto doloremque repudiandae saepe ab perferendis iure labore ea eligendi quo,
                                repellendus nemo doloribus delectus mollitia! Cupiditate, amet.
                            </p>
                            <motion.div
                                variants={FadeUp(1.5)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center md:justify-start'>
                                <button className='primary-btn'>
                                    Learn More
                                </button>
                            </motion.div>
                        </motion.h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner