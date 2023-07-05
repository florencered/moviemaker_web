import React, { useEffect, useState } from "react";
import { TopCities } from "./TopCities.jsx";

export const Location = () => {
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState([]);
	const [drop, setDrop] = useState(false);
	const [html, setHtml] = useState("");

	useEffect(() => {
		fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
			.then((response) => response.json())
			.then((result) => result.data)
			.then((data) =>
				data.filter((item) => item.country.includes("India"))
			)
			.then((cities) => setMonsters(cities))
			.catch((error) => console.log("error", error));
	}, []);

	useEffect(() => {
		setFilteredMonsters(monsters);
	}, [monsters]);

	const handleChange = (e) => {
		const newMonsters = monsters.filter((monster) =>
			monster.city.toLowerCase().startsWith(e.target.value.toLowerCase())
		);
		setFilteredMonsters(newMonsters);
	};

	const listClick = (e) => {
		console.log("hello");
		setHtml(e.target.innnerHTML);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-8 mt-[10vh]">
			<div className="w-[40vw] flex flex-col bg-[#F3E59D] items-center justify-center  rounded-md">
				<div className=" px-4 py-2  w-[40vw]">
					<input
						id="city-search"
						className="shadow-none border-none bg-transparent focus:outline-none w-full h-full"
						type="search"
						placeholder="Select City"
						onChange={handleChange}
						onFocus={() => setDrop(true)}
						onBlur={() => setDrop(false)}
					/>
				</div>
				<div className="bg-[#F3E59D] w-[40vw] px-4 py-2 ">
					<ul
						className=" rounded-lg overflow-hidden text-left"
						name="monster"
						id="monsters"
					>
						{filteredMonsters.slice(0, 9).map((monster) => (
							<li key={monster.city}>
								<button onClick={listClick}>
									{monster.city}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			<TopCities />
		</div>
	);
};
