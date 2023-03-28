import React from 'react';
const Dashboard = () => {
    const date = new Date().toDateString();
    return (
		<>
			<div className='bg-[#0C1829] py-3 px-11 flex items-center justify-between text-white'>
				<div className='flex items-center gap-4'>
					<span className='inline-block w-[42px] h-[42px] bg-gray-400 rounded-full'></span>

					<p className=''>NTMC</p>
				</div>

				<div>
					<p>
						National Telecommunication and Monitoring Center
						Dashboard{" "}
					</p>
				</div>
				<div>
					<p>{date}</p>
				</div>
			</div>

			<div className='my-[50px] px-[46px] grid grid-cols-1 md:grid-cols-2 gap-8'>
				<DashboardElement className={"bg-blue-600"}>
					Daily Report
				</DashboardElement>
				<DashboardElement className={"bg-green-600"}>
					Show Report
				</DashboardElement>

				{/* DEO Transfer  */}
				<DashboardElement
					htmlFor='transferDEO'
					className={"bg-yellow-600"}
				>
					Transfer DEO
				</DashboardElement>

				{/* DEO add  */}
				<DashboardElement
					htmlFor='addDEO'
					className={"bg-red-600"}
				>
					Add DEO
				</DashboardElement>
			</div>
		</>
	);
};

const DashboardElement = (props) => {
    return (
		<div className='bg-[#0C1829] h-[255px] flex items-center justify-center'>
            <label htmlFor={props.htmlFor} className={'btn '+ (props.className)}>{ props.children}</label>
		</div>
	);
}

export default Dashboard;


