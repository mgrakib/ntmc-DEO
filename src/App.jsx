import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Report from './component/Report/Report'
import Dashboard from './component/Dashboard/Dashboard'
import AddDEO from './component/Dashboard/AddDEO/AddDEO'
import TransfarDEO from './component/Dashboard/TransfarDEO/TransfarDEO'
import ShowReport from './component/Dashboard/ShowReport/ShowReport'
import DailyReport from './component/Dashboard/DailyReport/DailyReport'
import { getDataFromDB } from './component/Unilities/common'

function App() {


  const [total, setTotal] = useState(0);
  const [totalEntry, setTotalEntry] = useState(0);
  const [totalRelease, setTotalRelease] = useState(0);
  const handelTotal = () => {
		const allDEO = getDataFromDB("deo-list");
		let value = 0;
		for (const jailName in allDEO) {
			for (const id in allDEO[jailName]) {
				value = value + 1;
			}
		}
		setTotal(value);
  };

  useEffect(() => {
		const allDEO = getDataFromDB("deo-list");
		let value = 0;
		for (const jailName in allDEO) {
			for (const id in allDEO[jailName]) {
				value = value + 1;
			}
		}
    setTotal(value);
    
  }, []);


  const handelEntryRelease = () => {
  const totalEntry = getDataFromDB("allData");
  let totalEntryValue = 0;
  let totalReleaseValue = 0;
  for (const jailName in totalEntry) {
		for (const id in totalEntry[jailName]) {
			for (const name in totalEntry[jailName][id]) {
				for (const entry in totalEntry[jailName][id][name]) {
					totalEntryValue =
						totalEntryValue +
						parseInt(totalEntry[jailName][id][name]["Entry"]);

					totalReleaseValue =
						totalReleaseValue +
						parseInt(totalEntry[jailName][id][name]["Release"]);
				}
			}
		}
  }
  setTotalEntry(totalEntryValue / 2);
  setTotalRelease(totalReleaseValue / 2);
}

  useEffect(() => {
    
    const totalEntry = getDataFromDB("allData");
    let totalEntryValue = 0;
    let totalReleaseValue = 0;
	for (const jailName in totalEntry) {
		for (const id in totalEntry[jailName]) {
			for (const name in totalEntry[jailName][id]) {
				for (const entry in totalEntry[jailName][id][name]) {
					totalEntryValue =
						totalEntryValue +
            parseInt(totalEntry[jailName][id][name]["Entry"]);
          
          totalReleaseValue =
				totalReleaseValue +
				parseInt(totalEntry[jailName][id][name]["Release"]);
				}
			}
		}
	}
    setTotalEntry(totalEntryValue / 2);
    setTotalRelease(totalReleaseValue / 2);
  },[])
  
  
  return (
		<div className='App'>
			<Dashboard
				total={total}
				totalEntry={totalEntry}
				totalRelease={totalRelease}
			/>
			<AddDEO handelTotal={handelTotal} />
			<TransfarDEO />
			<ShowReport />
			<DailyReport handelEntryRelease={handelEntryRelease} />
		</div>
  );
}

export default App
