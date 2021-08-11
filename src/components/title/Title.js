import React from "react";

const Title = ({ title, subtitle }) => {
	return (
		<div className="page__title">
			{title && <h1>{title}</h1>}
			{subtitle && <h3>{subtitle}</h3>}
		</div>
	);
};

export default Title;
