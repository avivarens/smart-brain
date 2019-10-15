import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, onRouteChange, initialState }) => {
	return (
		<div className='center ma'>
			<div className='image center absolute mt10'>
			<img className='outputimage' id='inputimage' alt='' src={imageUrl}  />
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
			</div>
		</div>
	);
}

export default FaceRecognition;