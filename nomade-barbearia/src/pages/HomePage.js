import React, { useState } from 'react';
import { FaInstagram as Instagram, FaPhone as Phone, FaEnvelope as Mail } from "react-icons/fa";
import '../App.css';
import '../index.css'


function HomePage() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const [fade, setFade] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false); // NOVO ESTADO

  // Função para abrir o Whatsapp
  const abrirWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um corte.");
    window.open(`https://wa.me/5585987035124?text=${message}`, "_blank");
  };

  // Função auxiliar para animação de scroll com duração personalizada
  function scrollToWithOffset(targetY, duration = 700) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // EaseInOutQuad para suavidade
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Fechar menu ao navegar
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuAberto(false); // fecha o menu ao clicar
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 70; // ajuste conforme sua navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      scrollToWithOffset(sectionTop - navbarHeight, 900); // 900ms de duração
    }
  };

  // Função para mostrar mais com fade-in
  const handleMostrarMais = () => {
    setMostrarMais(true);
    setTimeout(() => setFade(true), 50); // ativa fade-in após renderizar
  };

  // Função para mostrar menos com fade-out
  const handleMostrarMenos = () => {
    setFade(false); // ativa fade-out
    setTimeout(() => setMostrarMais(false), 500); // espera o fade-out terminar
  };

  return (
    <div className="HomePage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>NÔMADE</h1>
          </div>
          <button
            className="navbar-toggle"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          <ul className={`navbar-nav${menuAberto ? ' nav-aberto' : ''}`}>
            <li className="nav-item">
              <a
                href="#hero"
                className="nav-link"
                onClick={e => handleNavClick(e, 'hero')}
              >Início</a>
            </li>
            <li className="nav-item">
              <a
                href="#servicos"
                className="nav-link"
                onClick={e => handleNavClick(e, 'servicos')}
              >Serviços</a>
            </li>
            <li className="nav-item">
              <a
                href="#agende-container"
                className="nav-link"
                onClick={e => handleNavClick(e, 'agende-container')}
              >Agendar</a>
            </li>
            <li className="nav-item">
              <a
                href="#sobre-container"
                className="nav-link"
                onClick={e => handleNavClick(e, 'sobre-container')}
              >Sobre</a>
            </li>

          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">NÔMADE</h1>
            <div className="hero-accent-line"></div>
            <p className="hero-subtitle">
              Mais que uma barbearia, somos artesãos do estilo. Criamos looks únicos 
              que refletem sua personalidade, combinando técnicas tradicionais com 
              tendências contemporâneas.
            </p>

            <div className="hero-buttons">
              <button onClick={abrirWhatsApp} className="btn btn-primary btn-animado">Agendar Horário</button>
              <button onClick={e => handleNavClick(e, 'servicos')} className="btn btn-outline">Nossos Serviços</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de Serviço */}
      <section id="servicos" className="servicos">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Nossos Serviços</h2>
            <div className="services-accent-line"></div>
            <p className="services-description">
              Oferecemos uma gama completa de serviços para cuidar do seu estilo com 
              excelência e atenção aos detalhes.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12"/>
                  <path d="M6 18L18 6"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="service-title">CORTE</h3>
              <p className="service-description">
                Corte social, degradê ou na tesoura - lavagem inclusa
              </p>
              <div className="service-price">R$ 35</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18"/>
                  <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4"/>
                  <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4"/>
                </svg>
              </div>
              <h3 className="service-title">BARBA</h3>
              <p className="service-description">
                Corte alinhamento dos fios, com definição no contorno e acabamento limpo - vapor de ozônio incluso
              </p>
              <div className="service-price">R$ 35</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                  <path d="M12.56 6.6A9 9 0 0 0 9 12.25"/>
                  <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z"/>
                </svg>
              </div>
              <h3 className="service-title">COMBO NÒMADE</h3>
              <p className="service-description">
                Corte & Barba
              </p>
              <div className="service-price">R$ 65</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="service-title">CORTE NA ZERO</h3>
              <p className="service-description">
                Corte na máquina ou navalha no zero
              </p>
              <div className="service-price">R$ 20</div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda coluna de vendas */}
      <section className="servicos">
        <div className="services-container">
          <div className="services-header"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12"/>
                  <path d="M6 18L18 6"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="service-title">PEZINHO</h3>
              <p className="service-description">
                Acabamento nas laterais , nuca e testa para manter o corte alinhado
              </p>
              <div className="service-price">R$ 20</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18"/>
                  <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4"/>
                  <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4"/>
                </svg>
              </div>
              <h3 className="service-title">CORTE INFANTIL</h3>
              <p className="service-description">
                6 a 10 anos 
              </p>
              <div className="service-price">R$ 40</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                  <path d="M12.56 6.6A9 9 0 0 0 9 12.25"/>
                  <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z"/>
                </svg>
              </div>
              <h3 className="service-title">CORTES LONGOS</h3>
              <p className="service-description">
                Corte longo com acabamento preciso, ajuste de pontas e definição do formato.
              </p>
              <div className="service-price">R$ 50</div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="service-title">LIMPEZA AURICULAR OU NASAL</h3>
              <p className="service-description">
                Remoção dos pelos da orelha ou nariz cera quente
              </p>
              <div className="service-price">R$ 15</div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão Descubra Mais */}
      {!mostrarMais && (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button
            className="btn btn-primary btn-animado"
            onClick={handleMostrarMais}
          >
            Descubra mais
          </button>
        </div>
      )}

      {/* Colunas extras de serviços, exibidas apenas se mostrarMais for true */}
      {mostrarMais && (
        <div className={`fade-container ${fade ? 'fade-in' : 'fade-out'}`}>
          <section className="servicos">
            <div className="services-container">
              <div className="services-header"></div>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12"/>
                      <path d="M6 18L18 6"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 className="service-title">SOBRANCELHA</h3>
                  <p className="service-description"></p>
                  <div className="service-price">R$ 25</div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12h18"/>
                      <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4"/>
                      <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4"/>
                    </svg>
                  </div>
                  <h3 className="service-title">ESCOVA</h3>
                  <p className="service-description"></p>
                  <div className="service-price">R$ 20</div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.19 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                      <path d="M12.56 6.6A9 9 0 0 0 9 12.25"/>
                      <path d="M12.56 6.6c-.4 1.65-.6 3.35-.6 5.05 0 .81.05 1.6.13 2.39a9 9 0 0 0 8.44-7.15c-.41-.56-.94-1.02-1.53-1.29z"/>
                    </svg>
                  </div>
                  <h3 className="service-title">HIDRATAÇÃO</h3>
                  <p className="service-description"></p>
                  <div className="service-price">R$ 20</div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <h3 className="service-title">SKINCARE</h3>
                  <p className="service-description"></p>
                  <div className="service-price">R$ 20</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quarta coluna de vendas */}
          <section className="servicos">
            <div className="services-container">
              <div className="services-header"></div>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12"/>
                      <path d="M6 18L18 6"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 className="service-title">PENTEADO OU FINALIZAÇÃO</h3>
                  <p className="service-description"></p>
                  <div className="service-price">R$ 25</div>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12h18"/>
                      <path d="M8 8c0-2.5 2-4 4-4s4 1.5 4 4"/>
                      <path d="M8 16c0 2.5 2 4 4 4s4-1.5 4-4"/>
                    </svg>
                  </div>
                  <h3 className="service-title">MÃO DE OBRA</h3>
                  <p className="service-description"></p>
                  <div className="service-price">SOB CONSULTA</div>
                </div>
              </div>
            </div>
          </section>

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <button
              className="btn btn-primary btn-animado"
              onClick={handleMostrarMenos}
            >
              Mostrar menos
            </button>
          </div>
        </div>
      )}

      <div id="agende-container" className="agende-container">
        <div className="agende-content">
          <h1 className="agende-title">Agende seu Corte</h1>
          <button className="agende-btn btn-animado" onClick={abrirWhatsApp}>
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Agendar pelo WhatsApp
          </button>
        </div>
      </div>

      {/*Sobre container*/}
      <div id="sobre-container" className="sobre-container">
        <div className="sobre-content">
          <div className="sobre-esquerda">
            <h2 className="sobre-titulo">
              Sobre a Nômade
              <span className="sobre-linha"></span>
            </h2>
            <p className="sobre-texto">
              A Barbearia Nômade nasceu da paixão por criar experiências únicas de 
              cuidado masculino. Combinamos a tradição das antigas barbearias com 
              técnicas modernas e produtos de alta qualidade.
            </p>
            <p className="sobre-texto">
              Nosso ambiente foi pensado para proporcionar momentos de 
              relaxamento e renovação, onde cada cliente se sente em casa enquanto 
              cuida de sua aparência e bem-estar.
            </p>
            <div className="localizacao-box">
              <div className="localizacao-icon">📍</div>
              <div>
                <h3 className="localizacao-titulo">Localização</h3>
                <p className="localizacao-texto">Centro Fashion Fortaleza - Setor Amarelo</p>
                <p className="localizacao-texto">Ceara, Fortaleza - CEP: 61604-290</p>
                <p className="localizacao-texto">Princesa Isabel, 2309</p>
              </div>
            </div>
          </div>
          <div className="sobre-direita">
            <div className="feature-item">
              <div className="feature-icon">👤</div>
              <div>
                <h3 className="feature-titulo">Profissionais Qualificados</h3>
                <p className="feature-texto">Equipe experiente com mais de 10 anos no mercado</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <div>
                <h3 className="feature-titulo">Atendimento Personalizado</h3>
                <p className="feature-texto">Cada cliente recebe atenção especial e cuidado individual</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🕐</div>
              <div>
                <h3 className="feature-titulo">Horários Flexíveis</h3>
                <p className="feature-texto">Funcionamos todos os dias com horários estendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-coluna">
            <h3 className="footer-logo">NÔMADE</h3>
            <p className="footer-descricao">
              Mais que uma barbearia, somos artesãos do estilo masculino.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/nomadebarbearia?igsh=emNteDVoczlocTNp" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram />
              </a>
              <a href="tel:+5585981696095" className="social-icon">
                <Phone />
              </a>
              <a href="mailto:contato@nomade.com.br" className="social-icon">
                <Mail />
              </a>
            </div>
          </div>
          <div className="footer-coluna">
            <h4 className="footer-titulo">Contato</h4>
            <p className="footer-info">(85) 98169-6095</p>
            <p className="footer-info">contato@nomade.com.br</p>
            <p className="footer-info">@nomadebarbearia</p>
          </div>
          <div className="footer-coluna">
            <h4 className="footer-titulo">Localização</h4>
            <p className="footer-info">Princesa Isabel, 2309</p>
            <p className="footer-info">Centro Fashion Fortaleza - Setor Amarelo</p>
            <p className="footer-info">CEP: 61604-290</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Barbearia Nômade. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
