import React from "react";

export const TopCitiesCard = ({ city }) => {
	return (
		<div>
			<div className="flex flex-col items-center justify-between gap-4">
				<img
					className="w-[75px] rounded-[50%]"
					src="https://static.amazon.jobs/locations/23/thumbnails/bangalore-thumb1.jpg?1630709762"
					alt="city-img"
				/>
				<h3 className=" -mt-2">{city}</h3>
			</div>
		</div>
	);
};
