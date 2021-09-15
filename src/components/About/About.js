import s from './About.module.css'

const About = () => {
	return(
		<div className={s.wrapper}>
			<h1 className={s.title}>To do list app</h1>
			<div className={s.info}>
				<p>Hello everyone! This is a simple app can help you make list of tasks.</p>
				<p>If you want to add a task - enter task in field and press button "Add new task"</p>
				<p>After that you can check your task. For check -  click into white square</p>
				<p>Then you complete your task you may remove it. But before remove you should check the task.
				</p>
				<p>Happy using!</p>
			</div>
			<footer  className={s.footer}>
				Made by Stas Vasilev... 2021
			</footer>
		</div>
	)
}

export default About;