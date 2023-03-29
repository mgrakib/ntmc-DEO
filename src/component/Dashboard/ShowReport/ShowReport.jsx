import React, { useEffect, useState } from 'react';
import { getDataFromDB } from '../../Unilities/common';

const ShowReport = () => {
	const allDEOList = getDataFromDB("deo-list");
	// console.log(allDEOList);
	
	const allJailName = [];

	for (const jailName in allDEOList) {
		allJailName.push(jailName)
	}
	
    return (
		<div>
			{/* Put this part before </body> tag */}
			<input
				type='checkbox'
				id='showReport'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box w-11/12 max-w-5xl'>
					<h3 className='font-bold text-lg'>
						Congratulations random Internet user!
					</h3>
					<p className='py-4'>
						You've been selected for a chance to get one year of
						subscription to use Wikipedia for free!
					</p>
					<div>
						{Object.keys(allDEOList).map(jail => (
							<div key={jail}>
								<h1 className='text-2xl font-bold bg-green-500 px-3 my-2'>{jail}</h1>
								{Object.keys(allDEOList[jail]).map((id, index) => (
									<p key={id}>{`${index+1}. ${allDEOList[jail][id] }`}</p>
								))}
							</div>
						))}
					</div>
					<div className='modal-action'>
						<label
							htmlFor='showReport'
							className='btn'
						>
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowReport;