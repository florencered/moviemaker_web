import React from "react";
import { TopCitiesCard } from "./TopCitiesCard";

export const TopCities = () => {
	const citiesJSON = [
		{ id: 1, city: "Bangalore", src: "/images/cities/bangalore.svg" },
		{ id: 2, city: "Hyderabad", src: "images/cities/hyderabad.svg" },
		{ id: 3, city: "Mumbai", src: "images/cities/mumbai.svg" },
		{ id: 4, city: "Chennai", src: "images/cities/chennai.svg" },
		{ id: 5, city: "Delhi-NCR", src: "images/cities/delhi.svg" },
		{ id: 6, city: "Chenadigarh", src: "images/cities/chandigarh.svg" },
		{ id: 7, city: "Ahmedabad", src: "images/cities/ahmedabad.svg" },
		{ id: 8, city: "Kolkata", src: "images/cities/kolkata.svg" },
		{ id: 9, city: "Srinagar", src: "images/cities/srinagar.svg" },
		{ id: 10, city: "Goa", src: "images/cities/goa.svg" },
		{ id: 11, city: "Pune", src: "images/cities/pune.svg" },
		{ id: 12, city: "Kochi", src: "images/cities/kochi.svg" },
	];

	return (
		<div className="bg-[#F3E59D] rounded-lg flex flex-col items-center justify-between">
			<div className="w-max px-8 py-4 pb-8">
				<h1 className="font-bold mb-8">Top Cities</h1>
				<div className="grid grid-cols-4 gap-x-8 gap-y-8">
					{citiesJSON.map((city) => (
						<div key={city.id}>
							<TopCitiesCard city={city.city} src={city.src} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
