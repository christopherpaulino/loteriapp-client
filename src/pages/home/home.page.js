import React, { Component } from 'react';
import './home.style.css'
import { withRouter } from 'react-router-dom'
import LogoInline from '../../assets/logo-inline.png'
import VentaLoteria from '../venta-loteria/venta-loteria.page';
import VentaRecargas from '../venta-recargas/venta-recargas.page';
import EntregaPremios from '../entrega-premios/entrega-premios.page'
import Notificaciones from '../notificaciones/notificaciones.page';
import Resultados from '../resultados/resultados.page';
import CuadreVentas from '../cuadre-ventas/cuadre-ventas.page'
import Operaciones from '../operaciones/operaciones.page'




class HomePage extends Component {

    constructor(props){
        super(props)

       this.state = {
            loteria:<VentaLoteria></VentaLoteria>,
            recarga:<VentaRecargas></VentaRecargas>,
            entrega_premios: <EntregaPremios></EntregaPremios>,
            notificaciones: <Notificaciones></Notificaciones>,
            resultados: <Resultados></Resultados>,
            cuadre_ventas: <CuadreVentas></CuadreVentas>,
            operaciones: <Operaciones></Operaciones>,
            current_page: <VentaLoteria></VentaLoteria>,
            current_activo :"loteria"
        }
    }
    
    handleClick = (e) => {
        console.log(e.target);
        
        e.preventDefault()
            this.setState({
                current_page : this.state[`${e.target.name}`],
                current_activo : e.target.name
            })
    }
    showPage = () => {
                return this.state.current_page;
        }

    setActive=()=>{
        if(this.state.current_activo === "")
        return "active"
        
    }
    


    render() {

        const {current_activo} = this.state
        return (
            <div className="home-container row">

                <div className="menu-container col-2">
                    <nav className="navbar-default navbar-static-side" role="navigation">
                        <div className="sidebar-collapse">
                            <li className="nav-header">
                                <img alt="image" className="logo-inline" src={LogoInline} />

                            </li>
                            <ul className="nav metismenu" id="side-menu">

                                <li className={`${"loteria"==current_activo?"active":"" }`} onClick={this.handleClick} name={"loteria"}>
                                    <a href="" onClick={this.handleClick} name={"loteria"}> <span onClick={this.handleClick} name={"loteria"} className="nav-label">Venta Loteria</span></a>
                                </li>

                                <li className={`${"recarga"==current_activo?"active":"" }`} onClick={this.handleClick} name={"recarga"}>
                                    <a href="" onClick={this.handleClick} name={"recarga"}> <span onClick={this.handleClick} name={"recarga"} className="nav-label">Venta Recarga</span></a>
                                </li>

                               <li className={`${"resultados"==current_activo?"active":"" }`} onClick={this.handleClick} name={"resultados"}>
                                    <a href="" onClick={this.handleClick} name={"resultados"}> <span onClick={this.handleClick} name={"resultados"} className="nav-label">Resultados</span></a>
                                </li>
                                <li className={`${"entrega_premios"==current_activo?"active":"" }`} onClick={this.handleClick} name={"entrega_premios"}>
                                    <a href="" onClick={this.handleClick} name={"entrega_premios"}> <span onClick={this.handleClick} name={"entrega_premios"} className="nav-label">Entrega de Premios</span><span class="label label-warning float-right">16/24</span></a>
                                </li>

                                <li className={`${"cuadre_ventas"==current_activo?"active":"" }`} onClick={this.handleClick} name={"cuadre_ventas"}>
                                    <a href="" onClick={this.handleClick} name={"cuadre_ventas"}> <span onClick={this.handleClick} name={"cuadre_ventas"} className="nav-label">Cuadre de Ventas</span></a>
                                </li>
                                 <li className={`${"notificaciones"==current_activo?"active":"" }`} onClick={this.handleClick} name={"notificaciones"}>
                                    <a href="" onClick={this.handleClick} name={"notificaciones"}> <span onClick={this.handleClick} name={"notificaciones"} className="nav-label">Notificaciones</span></a>
                                </li>
                                <li className={`${"operaciones"==current_activo?"active":"" }`} onClick={this.handleClick} name={"operaciones"}>
                                    <a href="" onClick={this.handleClick} name={"operaciones"}> <span onClick={this.handleClick} name={"operaciones"} className="nav-label">Operaciones</span></a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>

                <div className="col-10 pages-container" >


                    <nav class="navbar navbar-expand navbar-dark" style={{ padding: "0rem 20px" }} >
                        <div className="navbar-brand">
                            <div >
                                <h4 className={"clock-navbar"}>06:00PM</h4>
                                <h6 className={"date-navbar"}>Sabado 16 Julio</h6>
                            </div>
                        </div>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggler" aria-controls="navBarToggler" aria-label="Toggle Navigation" aria-expanded="false">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navBarToggler">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Luisa Lopez <span><i className="fa fa-sign-out"></i></span></a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                    {
                        this.showPage()
                    }

                </div>

            </div>



        )
    }
}

export default withRouter(HomePage);