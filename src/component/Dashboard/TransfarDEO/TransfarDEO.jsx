import React, { useState, useRef } from "react";
import { getDataFromDB, jailNamesList } from '../../Unilities/common';

const TransfarDEO = () => {
    // set DEO Name Autometic DEO Name
    const [DEOName, setDEOName] = useState("");
    // set DEO Current wordkStation
    const [DEOCurrentJail, setDEOCurrentJail] = useState("");
    // set DEO Id 
	const [DEOID, setDEOID] = useState("");
	
	// select desable current workstation 
	const [isDisable, setIsDisable] = useState(false);
	
	// new workStation 
	const [DEONewJail, setDEONewJail] = useState('');
	const handelTransferJail = (event) => {
		setDEONewJail(event.target.value)
	}

	// handel transfer DEO 
	const handelDEOID = event => {
		// set value to DEO ID felidl
		setDEOID(event.target.value);

		// get all existing Value
		const allDeoList = getDataFromDB("deo-list");
		// loop to get jailName as key
		for (const jailName in allDeoList) {

			// loop to get id as key 
			for (const deoID in allDeoList[jailName]) {
				
                if (deoID == event.target.value) {
                    
                    setDEOName(allDeoList[jailName][deoID]);
                    setDEOCurrentJail(jailName);
                    
                    for (const jail of jailNamesList) {
                        if (jail.value === jailName) {
                            jail.disabled = true;    
                        } else {
                            jail.disabled = false; 
                        }
                    }
                    return;
                } else {
                    setDEOName('');
                    setDEOCurrentJail('');
				}
			}
		}
	};

	const handelTransfer = () => {
		
		if (!DEOID || !DEONewJail) {

			alert('you cant pass empty vlaue')
		}
		else if (!DEOName || !DEOCurrentJail ) {
			alert(`${DEOID} id is not add`)
		}
		else {
			const allDeoList = getDataFromDB("deo-list");

			// deleate DEO from old workstation
			for (const transferDEOID in allDeoList[DEOCurrentJail]) {
				if (transferDEOID === DEOID) {
					delete allDeoList[DEOCurrentJail][transferDEOID];
				}
			}
			if (!allDeoList[DEONewJail]) {
				allDeoList[DEONewJail] = { [DEOID]: DEOName };
				console.log(allDeoList);
				
			} else {
				// add DEO to new Workstation
				for (const newADDID in allDeoList[DEONewJail]) {
					console.log(newADDID);

					allDeoList[DEONewJail] = {
						...allDeoList[DEONewJail],
						[DEOID]: DEOName,
					};
				}
			}
			localStorage.setItem("deo-list", JSON.stringify(allDeoList));

			setDEOName("");
			setDEOCurrentJail("");
			setDEOID("");
			setDEONewJail("");
		}
	}

	
	const handelClose = () => {
		setDEOName('');
		setDEOCurrentJail("");
		setDEOID("");
		setDEONewJail("");
	}
	return (
		<div>
			<input
				type='checkbox'
				id='transferDEO'
				className='modal-toggle'
			/>
			<div className='modal modal-bottom sm:modal-middle'>
				<div className='modal-box'>
					<h3 className='font-bold text-lg'>
						Congratulations random Internet user!
					</h3>
					<p className='py-4'>
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div>
						{/* DEO ID */}
						<span className='inline-block text-red-500'>
							<small>DEO ID Should be Unique</small>
						</span>
						<div className='my-1'>
							<input
								onChange={handelDEOID}
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO ID'
								value={DEOID}
							/>
						</div>

						{/* DEO Name Auto Select  */}
						<div>
							<input
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO ID'
								value={DEOName}
								disabled
							/>
						</div>

						{/* DEO Transfar Jail Jail name*/}
						<div className='flex items-center justify-between  mt-5'>
							<p className='w-[47%]'>From</p>
							<p className='w-[47%]'>To</p>
						</div>

						{/* DEO Transfar Jail Jail */}
						<div className='flex items-center justify-between '>
							{/* current jail */}
							<div className='w-[47%]'>
								<input
									type='text'
									className='bg-gray-300 outline-none border py-2 px-3 w-full'
									placeholder='DEO ID'
									value={DEOCurrentJail}
									disabled
								/>
							</div>

							{/* transfar jail */}
							<div className='w-[47%]'>
								<select
									value={DEONewJail}
									onChange={handelTransferJail}
									className='border border-black rounded-md outline-none py-2 px-3 w-full'
								>
									{jailNamesList.map(jailName => (
										<option
											key={jailName.value}
											value={jailName.value}
											disabled={jailName.disabled}
										>
											{jailName.label}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{/* btn  */}
					<div className='modal-action'>
						<label
							htmlFor='transferDEO'
							className='btn bg-red-500'
							onClick={handelClose}
						>
							Close
						</label>
						<label
							htmlFor='transferDEO'
							className='btn bg-green-500'
							onClick={handelTransfer}
						>
							Transfer
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransfarDEO;