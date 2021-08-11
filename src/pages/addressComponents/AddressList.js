import { motion } from "framer-motion";
import React from "react";
import Title from "../../components/title/Title";
import AddressItems from "./AddressItems";

const AddressList = ({ suggestions }) => {
    
	return (
		<motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="address__list">
			<Title title="Адреса" />
			<div className="address__list__items">
				{suggestions.suggestions && suggestions.suggestions.map((item, index) => {
					return <AddressItems index={index} item={item}/>;
                    
				})}
			</div>
		</motion.div>
	);
};

export default AddressList;
