import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = () => {
	return(
		<div className={s.headerWrapper}>
			<h1 className={s.headerTitle}>Task manager</h1>
			<div className={s.linksWrapper} >
				<NavLink activeClassName={s.selected}  className={s.link} exact to='/'>Main</NavLink>
				<NavLink activeClassName={s.selected}  className={s.link} exact to='about'>About</NavLink>
			</div>
		</div>
	)
}

export default Header;