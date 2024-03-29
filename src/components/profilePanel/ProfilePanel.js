import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProfilePanel.scss';

import Loader from '../base/loader/Loader';

let ProfilePanel = (props) => {
	const history = useHistory(),
		[loadingPicture, setLoadingPicture] = React.useState(true);
	React.useEffect(() => {
		const img = new Image();
		img.src = props.user.picture;
		img.onload = () => setLoadingPicture(false);
	}, [props.user]);

	return (
		<div className='profilePanel'>
			<div className='picture' onClick={() => history.push('/logout')}>
				<span style={{ backgroundImage: 'url(' + props.user.picture + ')' }} />
				{loadingPicture && <Loader />}
			</div>
			<span className='name'>{props.user.name}</span>
			<span className='email'>{props.user.email}</span>
		</div>
	);
};

export default ProfilePanel;
