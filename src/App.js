import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
	   <div className="wrapper">
	   	 <Hello />
	   	 <br />
	     <SayFullName name="Artem" surname="Prygin" link="https://fb.com" />
	     <SayFullName name="Lena" surname="Lenina" link="https://vk.com" />
	     <SayFullName name="Ivan" surname="Ivanov" link="https://tickets.fifa.com/productList" />
	   </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> Моё имя {props.name}, фамилия {props.surname} </h1>
      <a href={props.link}>Ссылка на мой профиль </a>
    </div>
    )
}

function Hello() {
	return (
		<h1> Привет, бандиты </h1>
		)
}

export default App;
