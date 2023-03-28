import React, { useState, useRef } from "react";
import { getDataFromDB, jailNamesList } from '../../Unilities/common';

const TransfarDEO = () => {
    // option
    
    
    // const options = [
	// 	{ value: "option1", label: "Option 1", disabled: true },
	// 	{ value: "option2", label: "Option 2", disabled: false },
	// 	{ value: "option3", label: "Option 3", disabled: true },
	// ];
     
    // set DEO Name Autometic DEO Name
    const [DEOName, setDEOName] = useState("");
    // set DEO Current wordkStation
    const [DEOCurrentJail, setDEOCurrentJail] = useState("");

    const [isDisable, setIsDisable] = useState(false);
    // set DEO Id 
    const [DEOID, setDEOID] = useState("");

    // **********i dont now ********
    const selectRef = useRef(null);
    
	const handelDEOID = event => {
		// set value to DEO ID felidl
		setDEOID(event.target.value);

		// get all existing Value
		const allDeoList = getDataFromDB();
		for (const jailName in allDeoList) {
			for (const deoID in allDeoList[jailName]) {
                if (deoID == event.target.value) {
                    
                    
                    setDEOName(allDeoList[jailName][deoID]);
                    setDEOCurrentJail(jailName);
                    
                    for (const jail of jailNamesList) {
                        if (jail.value === jailName) {
                            jail.disabled = true;    
                        }
                        
                        
                    }

                    // const options = selectRef.current.options;
					// const values = [];

					// for (let i = 0; i < options.length; i++) {
					// 	values.push(options[i].value);
					// }
                    // // console.log('from ', values);
                    
                    
                    return;
                } else {
                    setDEOName('');
                    setDEOCurrentJail('');
				}
			}
		}
	};
const dynamicAttribute = "disabled";
		const isDisabled = true;
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
								{/* <select
									ref={selectRef}
									className='border border-black rounded-md outline-none py-2 px-3 w-full'
								>
									{options.map(option => (
										<option
											key={option.value}
											value={option.value}
											disabled={option.disabled}
										>
											{option.value}
										</option>
									))}
								</select> */}

								<select
									ref={selectRef}
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
						>
							Close
						</label>
						<label
							htmlFor='transferDEO'
							className='btn bg-green-500'
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