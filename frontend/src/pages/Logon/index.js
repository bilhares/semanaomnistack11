import React, { useState } from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';



export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const resp = await api.post('/sessions', { id });
            console.log(resp.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', resp.data.name);

            if (resp.data.name) {
                history.push('/profile');
            }

        } catch (err) {
            alert('Falha ' + err);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"> <FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );
}