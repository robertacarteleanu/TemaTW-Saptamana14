import { useEffect, useState } from 'react'
import store from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList () {
	const [robots, setRobots] = useState([])

	useEffect(() => {
		setRobots(store.getRobots())
		store.emitter.addListener('UPDATE', () => {
			setRobots(store.getRobots())
		})
	}, [])
	const addRobot = (robot) => {
		store.addRobot(robot)
	}
	const saveRobot = (id, robot) => {
		store.saveRobot(id, robot)
	}
  
	return (
		<div>				 
			{
				robots.map((e, i) => 
					<Robot item={e} key={i} onSave={saveRobot}  />
				)
			}
			<RobotForm onAdd={addRobot}/>
		</div>
	)
}

export default RobotList
