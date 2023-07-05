import React, { useEffect, useState } from "react";
import { TopCities } from "./TopCities.jsx";

export const Location = () => {
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState([]);
	const [drop, setDrop] = useState(false);
	const [html, setHtml] = useState("Select City");

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
		console.log(e.target.innerHTML);
		setHtml(e.target.innerHTML);
		setDrop(false);
	};

	const unFocus = () => {
		setTimeout(() => {
			if (drop) setDrop(false);
		}, 300);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-8 mt-[10vh]">
			<div className="w-[40vw] flex flex-col bg-[#F3E59D] items-center justify-center  rounded-md">
				<div className="   w-[40vw]">
					{drop ? (
						<input
							id="city-search"
							className="shadow-none border-none bg-transparent focus:outline-none w-full h-full px-4 py-2"
							type="search"
							placeholder="Select City"
							onChange={handleChange}
							onBlur={() => unFocus()}
						/>
					) : (
						<div
							className={
								"shadow-none border-none bg-transparent focus:outline-none w-full h-full text-left px-4 py-2" +
								(html === "Select City" ? "text-gray-400" : "")
							}
							dangerouslySetInnerHTML={{ __html: html }}
							onClick={() => setDrop(true)}
						></div>
					)}
				</div>
				<div
					className={
						"bg-[#F3E59D] w-[40vw]   " + (drop ? "" : "hidden")
					}
				>
					<ul
						className="rounded-lg overflow-hidden"
						name="monster"
						id="monsters"
					>
						{filteredMonsters.slice(0, 9).map((monster) => (
							<li key={monster.city}>
								<button
									className="w-full h-full text-left px-4 py-2"
									onClick={(e) => listClick(e)}
								>
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
