// Dates from: https://horoscopes.astro-seek.com/
// YYYY-MM-DD format
let retrograde_dates = [
	["2022-01-04", "2022-02-04"],
	["2022-05-10", "2022-06-03"],
	["2022-09-10", "2022-10-02"],
	["2022-12-29", "2023-01-18"],
	["2023-04-21", "2023-05-15"],
	["2023-08-23", "2023-09-15"],
	["2023-12-23", "2024-01-02"],
	["2024-04-02", "2024-04-25"],
	["2024-08-05", "2024-08-25"],
	["2024-11-26", "2024-12-15"],
	["2025-03-15", "2025-04-07"],
	["2025-07-18", "2025-08-11"],
	["2025-03-15", "2025-04-07"],
	["2025-11-09", "2025-11-29"],
	["2026-02-26", "2026-03-20"],
	["2026-06-29", "2026-07-24"],
	["2026-10-24", "2026-11-13"],
	["2027-02-29", "2027-03-03"],
	["2027-06-10", "2027-07-04"],
	["2027-10-07", "2027-10-28"],
	["2028-01-24", "2028-02-14"],
	["2028-09-19", "2028-10-11"],
	["2029-01-27", "2029-01-27"],
	["2029-05-02", "2029-05-25"],
	["2029-09-02", "2029-09-25"],
	["2029-11-22", "2029-12-31"],
];

// Check if date is in range
function check_date(current_date) {
	let last_end_date = new Date(retrograde_dates[retrograde_dates.length - 1][1]);
	let last_start_date = new Date(retrograde_dates[retrograde_dates.length - 1][0]);

	// If current date is bigger than the last date of array 
	if (current_date > last_end_date) {
		return {
			output: "¯&bsol;_(ツ)_/¯",
			explanation: last_end_date.toLocaleDateString("tr-TR") + " tarihinden sonrasını bilmiyoruz çünkü Ezgi girmedi. Hihihi."
		};
	}
	// If current day is between last retrograde period
	if (last_start_date <= current_date && current_date <= last_end_date) {
		return {
			output: "Evet.*",
			explanation: last_end_date.toLocaleDateString("tr-TR") + " tarihinde sürüyor olacak."
		};
	}

	for (let i = 0; i < retrograde_dates.length; i++) {

		let start_date = new Date(retrograde_dates[i][0]);
		let end_date = new Date(retrograde_dates[i][1]);
		let next_start_date = new Date(retrograde_dates[i + 1][0]);

		// If current date is between a retrograde period
		if (start_date <= current_date && current_date <= end_date) {
			return {
				output: "Evet.",
				explanation: end_date.toLocaleDateString("tr-TR") + " tarihine kadar sürecek."
			};
		}
		// If current date is not between a retrograde period
		else if (end_date < current_date && current_date < next_start_date) {
			return {
				output: "Hayır.",
				explanation: next_start_date.toLocaleDateString("tr-TR") + " tarihinde retro başlayacak."
			};

		}
	}
}

let date = check_date(new Date());

document.getElementById("output").innerHTML = date.output;
document.getElementById("explanation").innerHTML = date.explanation;

console.log("Bu site tamamen eğlence amaçlı yapılmıştır. Lütfen astrolojinin bir bilim dalı olmadığını unutmayın!");
console.log("Daha fazla bilgi için: https://www.goodreads.com/tr/book/show/25996399-astrolojinin-bilimle-i-mtihan");
