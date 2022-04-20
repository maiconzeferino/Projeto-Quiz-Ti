import Header from "./Header";
import Content from "./Content";
import LateralMenu from "./LateralMenu";
import Cadastro from "../Cadastro/Cadastro";
import Listar from "../Cadastro/Listar";

export default function Layout(props) {
    return (
        <>
            <Header />
            <LateralMenu />
            <Content />             
            <Cadastro />
            <Listar />  
        </>
    );
}
