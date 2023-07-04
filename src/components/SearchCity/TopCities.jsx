import React from "react";
import { TopCitiesCard } from "./TopCitiesCard";

export const TopCities = () => {
	return (
		<div className="bg-[#F3E59D] rounded-lg flex flex-col items-center justify-center">
			<div className="w-[40vw] px-8 py-4 pb-8">
				<h1 className="font-bold mb-8">Top Cities</h1>
				<div className="grid grid-cols-4 gap-x-4 gap-y-8">
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Mumbai" />
					<TopCitiesCard city="Kochi" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
					<TopCitiesCard city="Bangalore" />
				</div>
			</div>
		</div>
	);
};
