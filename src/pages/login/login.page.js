import React,{Component} from 'react'
import './login.style.css'
import { withRouter} from 'react-router-dom'

class LoginPage extends Component{

    

    HandleSubmit=(e)=>{
        e.preventDefault();
    
        this.props.history.push("/")
    
        
    }

    render(){
        return(
            <div className="body">

            
            <div className="login-container">
               <div className="col-12">
               <div className="row">
               <div className="col-6 container-svg">
               <svg className="Path_359" viewBox="0 0 596.722 986" preserveAspectRatio="none">
		       <path id="Path_359" d="M 0 0 L 525.9029541015625 -0.3644485473632812 C 525.9029541015625 -0.3644485473632812 619.8091430664062 181.2537994384766 582.1470336914062 337.3070373535156 C 541.6813354492188 498.4006652832031 476.174560546875 586.3094482421875 471.3240356445312 724.6634521484375 C 475.298828125 971.5914916992188 748.609619140625 986 748.609619140625 986 L 0 986 L 0 0 Z">
		</path>
	            </svg>
               </div>
               
                <div className="col-6 container-login">
                <form onSubmit={this.HandleSubmit}>
                   <div className={"input-group"}>
                       <div className={"input-group-prepend"}>
                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                       </div>
                       <input className="form-control" type={"text"} placeholder=""></input>
                       
                   </div>
                   <div className={"input-group"}>
                       <div className={"input-group-prepend"}>
                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                       </div>
                       <input className="form-control" type={"password"} placeholder=""></input>
                       
                   </div>
                   <button className={"btn btn-primary btn-block"} type={"submit"}>Entrar</button>

               </form>
                <a href={"/"} >¿Olvidó su contraseña?</a>
                </div>
                
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter( LoginPage);
