export const GreetUser = (props: { name?: string, age?: number, favofood?: string }) => {

	const showAlert = () => {
		alert(Math.random())
	}

	return (
		<div>
			<h1 onClick={() => showAlert()}>
				Welcome to my website {props.name}!
			</h1>
		</div>
	)
}