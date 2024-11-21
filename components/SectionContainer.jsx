'use client'

import { motion } from "framer-motion"

const SectionContainer = ({children}) => {
  return (
    <motion.div className="h-full" initial={{y:"-220vh"}} animate={{y:"0%"}} transition={{duration:1}}>
     {children}
    </motion.div>
  )
}

export default SectionContainer