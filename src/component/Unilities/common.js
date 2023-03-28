/** @format */

const jailNamesList = [
	{ value: "select", label: "select", disabled: false },
	{ value: "kashimpur-1", label: "Kashimpur-1", disabled: false },
	{ value: "kashimpur-2", label: "Kashimpur-2", disabled: false },
	{ value: "kashimpur-3", label: "Kashimpur-3", disabled: false },
	{ value: "kashimpur-4", label: "Kashimpur-4", disabled: false },
	{ value: "Dhaka Centeral Jail", label: "Dhaka Centeral Jail", disabled: false },
	{ value: "Gazipur District Jail", label: "Gazipur District Jail", disabled: false },
];

const addToDb = (jailName, DEOName, DEOID) => {
	// get data form localStorage
	const storedDEO = getDataFromDB();
	// check by jailname have operator list (array)
	const DEOList = storedDEO[jailName];

	// if have not any operator
	if (!DEOList) {
		for (const jailNameLoop in storedDEO) {
			// console.log("inloop", );
			for (const deoID in storedDEO[jailNameLoop]) {
				if (deoID === DEOID) {
					alert(`${deoID} already have`);
					return;
				}
			}
		}
		storedDEO[jailName] = { [DEOID]: DEOName };
	}
	// if already have added operator
	else {
		// console.log('if have', storedDEO);
		for (const jailNameLoop in storedDEO) {
			// console.log("inloop", );
			for (const deoID in storedDEO[jailNameLoop]) {
				if (deoID === DEOID) {
					alert(`${deoID} already have`);
					return;
				}
			}
		}

		// storedDEO[jailName] = { [DEOID]: DEOName };

		storedDEO[jailName] = {
			...storedDEO[jailName],
			[DEOID]: DEOName,
		};

		// storedDEO[jailName].push(DEOName);
	}

	// again set update DEO List to loacal stora
	localStorage.setItem("deo-list", JSON.stringify(storedDEO));
};

const getDataFromDB = () => {
	let DEOList = {};
	const storedDEO = localStorage.getItem("deo-list");
	if (storedDEO) {
		DEOList = JSON.parse(storedDEO);
	}
	return DEOList;
};

export { addToDb, getDataFromDB, jailNamesList };
