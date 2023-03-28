import React, { useState } from 'react';
import { addToDb, jailNamesList } from '../../Unilities/common';

const AddDEO = () => {
    const [DEOName, setDEOName] = useState('');
    const changeNameHandeler = (event) => {
        setDEOName(event.target.value);
    }
    const [DEOID, setDEOID] = useState("");
    const changeIDHandeler = (event) => {
        setDEOID(event.target.value);
    }

    const [jailName, setJailName] = useState('select');
    const changeJailHandelar = (event) => {
        setJailName(event.target.value);
    }


    const conformDEOList = () => {
      
		
		addToDb(jailName, DEOName, DEOID);
        
    }

    return (
		<div>
			<input
				type='checkbox'
				id='addDEO'
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
						{/* DEO Name */}
						<div>
							<input
								onChange={changeNameHandeler}
								value={DEOName}
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO Name'
							/>
						</div>
						<span className='my-1 inline-block text-red-500'>
							<small>DEO ID Should be Unique</small>
						</span>
						{/* DEO ID  */}
						<div>
							<input
								onChange={changeIDHandeler}
								value={DEOID}
								type='text'
								className='bg-gray-300 outline-none border py-2 px-3'
								placeholder='DEO ID'
							/>
						</div>
						{/* DEO Jail */}
						<div className='mt-4'>
							<label htmlFor='jailName'>Jail Name</label>
							<select
								onChange={changeJailHandelar}
								value={jailName}
								name=''
								id='jailName'
								className='border border-black rounded-md outline-none py-2 px-3 ml-3'
							>
								{jailNamesList.map(jailName => (
									<option value={jailName.value}>
										{jailName.label}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className='modal-action'>
						<label
							htmlFor='addDEO'
							className='btn bg-red-500'
						>
							Close
						</label>
						<label
							htmlFor='addDEO'
							className='btn bg-green-500'
							onClick={conformDEOList}
						>
							Done
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddDEO;