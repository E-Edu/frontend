import {Component} from 'react';
import './index.scss';
import Task_icon from '../../assets/icon_Profile/pencile.svg';
import User_icon from '../../assets/icon_Profile/user.svg';
import Trending_icon from '../../assets/icon_Profile/trending-up.svg';
import Calender_icon from '../../assets/icon_Profile/calendar.svg';
import Tags_icon from '../../assets/icon_Profile/tag.svg'

class Template extends Component {
	state = {};

	constructor(props) {
		super(props);
	}

	render() {
		return;
	<
		span;
		className = 'Profil' >
			< div >
			< div;
		className = 'resultContentHeader' >
			< div;
		className = 'resultLeft' >
			< span;
		className = 'resultSubject' >
			Profile
			< /span>
			< /div>

			< /div>
			< /div>
			< span;
		id = "profile_head" >
			< div;
		className = "central" >
			< img;
		src = 'Test';
		alt = 'Profilbild' / >
			< /div>
			< span;
		id = "name";
		className = "central" >
			< span > Benutzername < /span>
			< img;
		className = 'pen';
		src = {Task_icon};
		/>
		< /span>

		< div;
		id = "points";
		className = "central stat font-arimo" >
			< img;
		className = 'user';
		src = {User_icon};
		/>
		< span > 6.526 < /span><span className='var_info'> Punkte</s;
		pan >
		< /div>

		< div;
		id = "trending";
		className = "central stat font-arimo" >
			< img;
		className = 'trending';
		src = {Trending_icon};
		/>
		< span > 7.231 < /span><span className='var_info'> Fragen</s;
		pan >
		< /div>

		< div;
		id = "since";
		className = "central stat font-arimo" >
			< img;
		className = 'calender';
		src = {Calender_icon};
		/>
		< span > Dabei;
		seit < /span><span className='var_info'>21.03.2020</s;
		pan >
		< /div>
		< /span>
		< div;
		id = "profile_levelbar" >
			< div;
		id = "levelbar_back" >
			< div;
		id = "levelbar_font" >
			< span > Level < /span><span>145</s;
		pan > < br / >
		< span > 1423 / 8000 < /span>
		< /div>
		< div;
		id = 'levelbar_front' >

			< /div>
			< /div>
			< div;
		id = "level_rang" >
			< img;
		className = "tag";
		alt = "tag";
		src = {Tags_icon};
		/>
		< span;
		id = "level_Rang" > Der;
		Lehrender;
		Meister < /span>
		< /div>
		< /div>


		< /span>;
	}
}

export default Template;
