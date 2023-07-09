import React from "react";

export const TopCitiesCard = ({ city, src }) => {
	return (
		<div>
			<div className="flex flex-col items-center justify-between gap-4">
				<img
					className="w-[75px] rounded-[50%]"
					src={src}
					alt="city-img"
				/>
				<h3 className=" -mt-2">{city}</h3>
			</div>
		</div>
	);
};
