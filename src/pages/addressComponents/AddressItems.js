import React from "react";
import { motion } from "framer-motion";

const AddressItems = ({item, index}) => {
	return (
		<motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
            delay: `0.${index}`
        }}
        className="address__list__item">
			<span>{item.value}</span>
		</motion.div>
	);
};

export default AddressItems;
