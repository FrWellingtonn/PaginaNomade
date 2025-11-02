
import '../App.css';
import '../index.css';
import '../cadaster.css';

function CadasterPage(){
        return(

            <div className="container">
        {/* Background com overlay */}
        <div className="background">
            <div className="overlay"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="content">
            <div className="form-card">
                {/* Logo */}
                <div className="logo-container">
                    <div className="logo">
                        <svg className="scissors-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                            <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                            <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                        </svg>
                        <div className="logo-pulse"></div>
                    </div>
                </div>

                {/* Título */}
                <div className="header">
                    <h1>Barbearia Nômade</h1>
                    <p>Crie sua conta e agende seu horário</p>
                </div>

                {/* Formulário */}
                <form className="registration-form" onSubmit="handleSubmit(event)">
                    {/* Nome Completo */}
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Seu nome completo" 
                                required
                            />
                        </div>
                    </div>

                    {/* E-mail */}
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="seu@email.com" 
                                required
                            />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="(00) 00000-0000" 
                                required
                            />
                        </div>
                    </div>

                    {/* Senha */}
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="••••••••" 
                                required
                            />
                        </div>
                    </div>

                    {/* Confirmar Senha */}
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                placeholder="••••••••" 
                                required
                            />
                        </div>
                    </div>

                    {/* Botão Submit */}
                    <button type="submit" className="submit-btn">
                        Criar Conta
                    </button>
                </form>
            </div>

            {/* Link para login */}
            <p className="login-link">
                Já tem uma conta? 
                <a href="#login">Fazer login</a>
            </p>
        </div>
    </div>

        )

}

export default CadasterPage;