import React, { useState } from 'react';
import { getDataFromDB } from '../../Unilities/common';

const DailyReport = ({ handelEntryRelease }) => {
	// set DEO Name Autometic DEO Name
	const [DEOName, setDEOName] = useState("");
	// set DEO Current wordkStation
	const [DEOCurrentJail, setDEOCurrentJail] = useState("");
	// set DEO Id
	const [DEOID, setDEOID] = useState("");

	// new workStation
	const [entry, setEntry] = useState("");

	// new workStation
	const [release, setRelease] = useState("");

	// new workStation
	const [isDisable, setIsDisable] = useState(true);

	// handel DEO ID
	const handelDEOID = event => {
		setDEOID(event.target.value);

		const allDEOList = getDataFromDB("deo-list");

		for (const jailName in allDEOList) {
			for (const id in allDEOList[jailName]) {
				if (id === event.target.value) {
					setDEOCurrentJail(jailName);
					setDEOName(allDEOList[jailName][id]);
					setIsDisable(false);

					return;
				} else {
					setDEOCurrentJail("");
					setDEOName("");
					setIsDisable(true);
				}
			}
		}
	};
	// handel entry
	const handelEntry = event => {
		setEntry(event.target.value);
	};
	const handelRelese = event => {
		setRelease(event.target.value);
	};
	// sample data
	// allData = {'kashimpur-': {"A10": {'MG Rakib' : [10,12]}, "A11" : {'Mehedi' : [10,20]}}}

	const handelClose = () => {
		setDEOID("");
		setDEOCurrentJail("");
		setDEOName("");
		setEntry("");
		setRelease("");
		setIsDisable(true);
	};

	// to sobmit
	const handelSubmitData = () => {
		const allData = getDataFromDB("allData");
		if (!DEOName || !DEOCurrentJail || !DEOID || !entry || !release) {
			alert("you cant pass emepty. Maybe This Id is not added");
			return;
		} else {
			// chekt if allData have value
			if (Object.keys(allData).length) {
				// loop to get jail name which already update
				for (const jailName in allData) {
					// check new Jail is same or not
					if (jailName === DEOCurrentJail) {
						for (const id in allData[jailName]) {
							if (id === DEOID) {
								allData[DEOCurrentJail][DEOID] = {
									[DEOName]: {
										Entry: entry,
										Release: release,
									},
								};
								localStorage.setItem(
									"allData",
									JSON.stringify(allData)
								);

								setDEOID("");
								setDEOCurrentJail("");
								setDEOName("");
								setEntry("");
								setRelease("");
								setIsDisable(true);
								return;
							}

							allData[DEOCurrentJail] = {
								...allData[DEOCurrentJail],
								[DEOID]: {
									[DEOName]: {
										Entry: entry,
										Release: release,
									},
								},
							};
						}

						localStorage.setItem(
							"allData",
							JSON.stringify(allData)
						);

						setDEOID("");
						setDEOCurrentJail("");
						setDEOName("");
						setEntry("");
						setRelease("");
						setIsDisable(true);
						return;
					}

					allData[DEOCurrentJail] = {
						[DEOID]: {
							[DEOName]: { Entry: entry, Release: release },
						},
					};
				}
			}
			// chekt if allData have no value
			else {
				allData[DEOCurrentJail] = {
					[DEOID]: { [DEOName]: { Entry: entry, Release: release } },
				};
			}
		}
		setDEOID("");
		setDEOCurrentJail("");
		setDEOName("");
		setEntry("");
		setRelease("");
		setIsDisable(true);
		localStorage.setItem("allData", JSON.stringify(allData));
		handelEntryRelease();
	};

	return (
		<div>
			{/* Put this part before </body> tag */}
			<input
				type='checkbox'
				id='dailyReport'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>
						Congratulations random Internet user!
					</h3>
					<p className='py-4'>
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					{/* DEO ID  */}
					<div>
						<span className='inline-block text-red-500'>
							<small>Put your ID here first</small>
						</span>
						<div className='my-1'>
							<input
								onChange={handelDEOID}
								value={DEOID}
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO ID'
							/>
						</div>

						{/* DEO Name Auto Select  */}
						<span className='inline-block text-green-500'>
							<small>DEO Name</small>
						</span>
						<div>
							<input
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO Name'
								disabled
								value={DEOName}
							/>
						</div>

						{/* DEO Workstation Auto Select  */}
						<span className='inline-block text-green-500'>
							<small>DEO Workstation</small>
						</span>
						<div>
							<input
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO Workstation'
								disabled
								value={DEOCurrentJail}
							/>
						</div>

						{/* Total Entry and Release*/}
						<div className='flex items-center justify-between  mt-5'>
							<p className='w-[47%]'>Total Entry</p>
							<p className='w-[47%]'>Total Release</p>
						</div>

						{/* Total Entry and Release input */}
						<div className='flex items-center justify-between '>
							{/* entry */}
							<div className='w-[47%]'>
								<input
									onChange={handelEntry}
									type='number'
									className='bg-gray-300 outline-none border py-2 px-3 w-full'
									placeholder='Entry'
									disabled={isDisable}
									value={entry}
								/>
							</div>

							{/* release */}
							<div className='w-[47%]'>
								<input
									onChange={handelRelese}
									type='number'
									className='bg-gray-300 outline-none border py-2 px-3 w-full'
									placeholder='Release'
									disabled={isDisable}
									value={release}
								/>
							</div>
						</div>
					</div>
					<div className='modal-action'>
						{/* submit  */}
						<label
							htmlFor='dailyReport'
							className='btn bg-blue-600'
							onClick={handelSubmitData}
						>
							Submit
						</label>
						{/* close  */}
						<label
							htmlFor='dailyReport'
							className='btn bg-red-500'
							onClick={handelClose}
						>
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DailyReport;




// if (jailName === DEOCurrentJail) {
						
					// 	// if new entry jail and already update jail are same
					// 	for (const id in allData[jailName]) {
					// 		// this loop already check and set update value 
					// 		if (id === DEOID) {
					// 			// if already have otherwise it set
					// 			allData[jailName][DEOID] = {
					// 			[DEOName]: {
					// 				Entry: entry,
					// 				Release: release,
					// 			},
					// 		};
					// 		} else {
					// 			console.log(allData[jailName]);
								
					// 		}
					// 	}
					// } else {
					// 	alert("xxx");
					// 	allData[DEOCurrentJail] = {
					// 		[DEOID]: {
					// 			[DEOName]: { Entry: entry, Release: release },
					// 		},
					// 	};
					// }