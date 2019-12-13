import React from 'react';

import { ReactComponent as GithubLogo } from '../../../assets/img/github-logo.svg';

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login-box">
        <GithubLogo className="github-logo" />

        <input className="github-input" type="text" placeholder="Digite seu usuário do Github" />
        <button className="github-button">Enviar</button>
      </div>
    </div>
  );
};

export default Login;
