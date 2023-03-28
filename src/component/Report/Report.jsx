import React from 'react';
const operators = [
    { 'dhaka central' : ['sumon', 'nabil', 'jail warder']},
    { 'Kashimpur-1' : ['Mg Rakib', 'jail warder']},
    { 'Kashimpur-2' : ['Mahidul', 'jail warder']},
    { 'Kashimpur-3' : ['Sultan', 'jail warder']},
    { 'Kashimpur-women' : ['Bebi', 'jail warder']},
    { 'Gazipur District Jail' : ['Mehedi', 'Masum Miya', 'jail warder']},
]

const Report = () => {
    return (
		<div>
			<h1 className='text-3xl text-center font-bold '>Daily Report</h1>

			<div>
				{operators.map((jail, indexTop) => (
					<div className='mb-4'>
						<div className='text-xl font-bold bg-green-400 px-1 py-2'>
							({indexTop +1}) {[Object.keys(jail)[0]]}
						</div>
						{
							<span>
								{jail[Object.keys(jail)[0]].map(
									(name, index) => (
										<p className=''>
											{index + 1}. {name}
										</p>
									)
								)}
							</span>
						}
					</div>
				))}
			</div>
		</div>
	);
};

export default Report;