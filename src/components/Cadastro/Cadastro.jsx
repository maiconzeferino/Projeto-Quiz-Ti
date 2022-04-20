import React, { useState } from "react";
import "./cadastro.css";
import axios, { Axios } from "axios";

export default function Content() {

    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        axios.post("http://localhost:3001/cadastrarPergunta", {
            pergunta: values.pergunta,
            resp01: values.resp01,
            resp02: values.resp02,
            resp03: values.resp03,
            resp04: values.resp04,
            respcorreta: values.respcorreta,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <>
            <form >
                <div class="container">
                    <div class="form-group">
                        <label for="perguntaInput"> Cadastrar Pergunta</label>
                        <input type="text" name="pergunta" id="pergunta" class="form-control" onChange={handleChangeValues} />
                        <p>Respostas</p>
                        <div class="resp">
                            <div class="form-row">
                                <div class="col-2">
                                    <input type="text" name="resp01" id="resp01" class="form-control" placeholder="Resposta (1)" onChange={handleChangeValues} />
                                </div>
                                <div class="col-2">
                                    <input type="text" name="resp02" id="resp02" class="form-control" placeholder="Resposta (2)" onChange={handleChangeValues} />
                                </div>
                                <div class="col-2">
                                    <input type="text" name="resp03" id="resp03" class="form-control" placeholder="Resposta (3)" onChange={handleChangeValues} />
                                </div>
                                <div class="col-2">
                                    <input type="text" name="resp04" id="resp04" class="form-control" placeholder="Resposta (4)" onChange={handleChangeValues} />
                                </div>
                                <div class="col-2">
                                    <select class="form-control" type="text" name="respCorreta" id="respCorreta" onChange={handleChangeValues} >
                                        <option hidden="true">Selecione</option>
                                        <option disabled="disabled" default="true">Opção Correta</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-success mb-2" onClick={() => handleClickButton()} >Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}