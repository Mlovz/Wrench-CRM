import React, { useState } from "react";
import Search from "../components/search/Search";
import Title from "../components/title/Title";
import AddressList from "./addressComponents/AddressList";
import { HelmetTitle } from "../utils/Helmet";
import { motion } from "framer-motion";

const Address = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const handleSearch = async () => {
		if (query.length <= 3) return setSuggestions([]);
		await fetch(
			"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
			{
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"Authorization": "Token 2fc50a49dc554a27b79bed67b275d15d9066ce01",
				},
				body: JSON.stringify({ query }),
			}
		)
			.then((response) => response.json())
			.then((result) => setSuggestions(result))
			.catch((error) => console.log("error", error));
	};

	const addressVariants = {
		in: {
			transform: "scale(0.9)",
			opacity: 0,
		},
		out: {
			transform: "scale(1)",
			opacity: 1,
		},
		exit: {
			transform: "scale(0.9)",
			opacity: 0,
		},
		transition: {
			duration: 0.5,
		},
	};

	return (
		<motion.div
			variants={addressVariants}
			initial="in"
			animate="out"
			exit="exit"
			transition="transition"
			className="address">
			<HelmetTitle title="Поиск адресов" desc="Страница для поиска адресов" />

			<Title title="Поиск адресов" subtitle="Введите интересующий вас адрес" />

			<Search handleSearch={handleSearch} query={query} setQuery={setQuery} />
			
			{suggestions.length !== 0 && <AddressList suggestions={suggestions} />}
		</motion.div>
	);
};

export default Address;
