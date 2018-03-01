import React  from 'react';
import PropTypes from 'prop-types';
import { CircleLoader } from 'react-spinners';

 const  Login = (props) => {
	return(
	<div className="login-page">
		<div className="title">
			<div className="bold">öğrenci</div>
			<div>evi</div>
		</div>
		<div className="sub-title">
			ev idaresi uygulaması
		</div>
		<div className="login-form">
			<div className="loader-container">
				<CircleLoader
						color={'#123abc'}
						loading={props.loadingState}
						margin="auto"
				/>
			</div>
			<input className={props.validate && !props.name ? "common-input-error" : "common-input" } type="text" value={props.name} placeholder="Ad" name='name' onChange={(e)=>{props.handleChange("name",e.target.value)}} />
			{
				props.validate && !props.name &&
        		<div className="help-block">İsim girmelisiniz !</div>
            }
			<input className={props.validate && !props.surName ? "common-input-error" : "common-input" } type="text" value={props.surname} placeholder="Soyad" name='surName' onChange={(e)=>{props.handleChange("surName",e.target.value)}} />
			{
				props.validate && !props.surName &&
        		<div className="help-block">Soyisim girmelisiniz !</div>
            }
			<select onChange={(e)=>{props.handleChange("selectedHome",e.target.value)}} className={props.validate && !props.selectedHome ? "common-input-error" : "common-input" }>{!props.selectedHome ?
			<option selected disabled>Ev Seçiniz</option>
			: null}
				{props.homes.map((home, i)=>{
					return <option key={i} selected={props.selectedHome.id === home.id} value={home.id}>{home.name}</option>
				})}
			</select>
			{
				props.validate && !props.selectedHome &&
        		<div className="help-block">Ev seçmelisiniz !</div>
            }
			<div className="login-button-container">
				<button onClick={props.login} className="login-button">GİRİŞ</button>
			</div>
		</div>
	</div>);
}
Login.propTypes={
	onClick:PropTypes.func,
	homes:PropTypes.array
}
export default Login;
