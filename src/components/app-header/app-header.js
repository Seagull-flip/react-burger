import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import header from './app-header.module.css'


const AppHeader = (props) => {
	return (<header className={header.navPanel}>
		<div style={{ position: 'absolute', top: '20%', left: '40%' }}><Logo /></div>
		<nav className=''>
			<ul className={`${header.wrapperNav}`}>
				<li className={`${header.rowNav} mt-7`}>
					<a className={`${header.rowNav} text text_type_main-default mr-2 pl-5 pr-5`}><BurgerIcon type="primary" /><span className="ml-2">Конструктор</span></a>
					<a className={`${header.rowNav} btext text_type_main-default text_color_inactive pl-5 pr-5`}><ListIcon type="secondary" /><span className="ml-2">Лента заказов</span></a>
				</li>
				<li><a className={`${header.rowNav} text text_type_main-default text_color_inactive`}><ProfileIcon type="secondary" /><span className="ml-2">Личный кабинет</span></a></li>
			</ul>
		</nav>
	</header>)
}


export default AppHeader;