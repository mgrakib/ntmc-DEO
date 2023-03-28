import React, { useState } from 'react';
import { getDataFromDB } from '../../Unilities/common';

const TransfarDEO = () => {
    // set DEO Name Autometic DEO Name
    const [DEOName, setDEOName] = useState("");
    const [DEOCurrentJail, setDEOCurrentJail] = useState("");
    
    const [DEOID, setDEOID] = useState("");
    
	const handelDEOID = event => {
		// set value to DEO ID felidl
		setDEOID(event.target.value);

		// get all existing Value
		const allDeoList = getDataFromDB();
		for (const jailName in allDeoList) {
			for (const deoID in allDeoList[jailName]) {
                if (deoID == event.target.value) {
                    console.log(jailName);
                    
                    setDEOName(allDeoList[jailName][deoID]);
                    setDEOCurrentJail(jailName);
                    return;
                } else {
                    setDEOName('');
                    setDEOCurrentJail('');
				}
			}
		}
	};

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
									value={DEOCurrentJail}
									id='jailName'
									className='border border-black rounded-md outline-none py-2 px-3 w-full'
								>
									<option value='select'>Select</option>
									<option value='Kashimpur-1'>
										Kashimpur-1
									</option>
									<option value='Kashimpur-2'>
										Kashimpur-2
									</option>
									<option value='Kashimpur-3'>
										Kashimpur-3
									</option>
									<option value='Kashimpur-4'>
										Kashimpur-4
									</option>
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