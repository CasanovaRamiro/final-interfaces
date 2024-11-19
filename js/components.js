// components.js
class Components {
    static navbar() {
        return `
            <nav>
                <ul class="nav-ul">
                    <li class="nav-li container-logo" id="li-home-largo"><img class="foto-perfil" src="img/logo.png" alt="logo"><a href="home.html" class="interno">Memorial Chastain Park</a></li>
                    <li class="nav-li" id="li-home-corto"><a href="home.html" class="interno">MCP</a></li>
                    <li class="nav-li"><a href="turnos.html" class="interno">Pedir Turno</a></li>
                    <li class="nav-li"><a href="salaDeEspera.html" class="interno">Teleconsulta</a></li>
                    <li class="nav-li dropdown">
                        <div class="container-usuario">
                            <img class="foto-perfil" src="img/default-user.png" alt="foto de usuario">
                            <p id="perfil" class="nav-li">Perfil</p>
                        </div>
                            <ul class="dropdown-content">
                                <li><a href="perfil.html" class="interno">Mi perfil</a></li>
                                <li><a href="historial.html" class="interno">Turnos</a></li>
                                <li><a href="historialTeleconsultas.html" class="interno">Historial</a></li>
                                <li><a href="index.html" class="interno">Cerrar sesión</a></li>
                            </ul>
                        
                    </li>
                </ul>
            </nav>`;
    }

    static footer() {
        return `
            <footer>
                <ul class="company">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="" target="_blank">Nosotros</a></li>
                    <li><a href="https://medlineplus.gov/spanish/ency/article/001933.htm" target="_blank">Profesionales</a></li>
                </ul>
                <ul class="contact">
                    <span>Contacto</span>
                    <li>
                        <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                            <svg
                                viewBox="0 -2 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <title>twitter [#ffffff]</title>
                                  <desc>Created with Sketch.</desc>
                                  <defs></defs>
                                  <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <g
                                      id="Dribbble-Light-Preview"
                                      transform="translate(-60.000000, -7521.000000)"
                                      fill="#ffffff"
                                    >
                                      <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path
                                          d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                          id="twitter-[#ffffff]"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                        </svg>
                        <a href="https://twitter.com/" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                                stroke="#ffffff"
                                stroke-width="2"
                              ></path>
                              <circle cx="16.5" cy="7.5" r="1.5" fill="#ffffff"></circle>
                              <circle
                                cx="12"
                                cy="12"
                                r="3"
                                stroke="#ffffff"
                                stroke-width="2"
                              ></circle>
                            </g>
                          </svg>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                    </li>
                    <li>
                         <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
                                fill="#ffffff"
                              ></path>
                            </g>
                          </svg>
                        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                        style="color: aliceblue"
                      >
                        <path
                          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                        />
                        <path
                          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                        />
                      </svg>
                        <a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe" target="_blank">Email</a>
                    </li>
                </ul>
                <ul class="policies">
                    <li><a href="https://www.contpaqi.com/publicaciones/contabilidad/politicas-de-cobro-y-de-pago-para-mipymes" target="_blank">Políticas de seguridad</a></li>
                    <li><a href="https://www.gba.gob.ar/Politicasdeprivacidad" target="_blank">Políticas de privacidad</a></li>
                    <li><a href="https://textos-legales.edgartamarit.com/condiciones-generales-de-venta-rgpd/" target="_blank">Legales</a></li>
                </ul>
            </footer>`;
    }

    static videoCall() {
        return `
            <div class="video-container">
                <div class="join-screen active">
                    <button class="join-btn">Comenzar Video llamada</button>
                </div>
                <div class="call-screen">
                    <div class="video-area">
                        <div class="placeholder-video">
                            <img src="../img/doctor.jpg" alt="User camera placeholder" class="user-camera-img">
                        </div>
                    </div>
                    <div class="video-controls">
                        <button class="control-btn mic-btn">
                            <i class="mic-icon"><span class="material-symbols-outlined mic-icon"> mic </span></i>
                        </button>
                        <button class="control-btn camera-btn">
                            <i class="camera-icon"><span class="material-symbols-outlined videocam"> videocam </span></i>
                        </button>
                        <button class="control-btn screen-btn">
                            <i class="screen-icon"><span class="material-symbols-outlined"> screen_share </span></i>
                        </button>
                        <button class="control-btn hangup-btn">
                            <i class="phone-icon"><a class="hangup-a-btn" href="home.html"><span class="material-symbols-outlined"> call_end </span></a></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    static initVideoCall() {
        const joinBtn = document.querySelector('.join-btn');
        const joinScreen = document.querySelector('.join-screen');
        const callScreen = document.querySelector('.call-screen');
        const micBtn = document.querySelector('.mic-btn');
        const cameraBtn = document.querySelector('.camera-btn');
        const screenBtn = document.querySelector('.screen-btn');
        const hangupBtn = document.querySelector('.hangup-btn');
        const placeholderVideo = document.querySelector('.placeholder-video');

        let isMicOn = true;
        let isCameraOn = true;
        let isScreenSharing = false;

        // Join call handler
        joinBtn.addEventListener('click', () => {
            joinScreen.classList.remove('active');
            callScreen.classList.add('active');
        });

        // Mic toggle
        micBtn.addEventListener('click', () => {
            isMicOn = !isMicOn;
            micBtn.classList.toggle('off');
            micBtn.querySelector('.mic-icon').innerHTML = isMicOn ? `<span class="material-symbols-outlined mic-icon">mic</span>`
                : `<span class="material-symbols-outlined mic-icon ">mic_off</span>`;
        });

        // Camera toggle
        cameraBtn.addEventListener('click', () => {
            isCameraOn = !isCameraOn;
            cameraBtn.classList.toggle('off');
            cameraBtn.querySelector('.camera-icon').innerHTML = isCameraOn ? `<span class="material-symbols-outlined"> videocam </span>` : `<span class="material-symbols-outlined"> videocam_off </span>`;
            placeholderVideo.classList.toggle('camera-off');
        });

        // Screen share toggle
        screenBtn.addEventListener('click', () => {
            isScreenSharing = !isScreenSharing;
            screenBtn.classList.toggle('active');
            screenBtn.querySelector('.screen-icon').innerHTML = isScreenSharing ? `<span class="material-symbols-outlined"> stop_screen_share </span>` : `<span class="material-symbols-outlined"> screen_share </span>`;

            if (isScreenSharing) {
                placeholderVideo.innerHTML = `
                    <img src="../img/doctor.jpg" alt="Screen share placeholder" class="screen-share-img">
                `;
            } else {
                placeholderVideo.innerHTML = `
                    <img src="../img/doctor.jpg" alt="User camera placeholder" class="user-camera-img">
                `;
            }
        });

        // Hang up handler
        hangupBtn.addEventListener('click', () => {
            joinScreen.classList.add('active');
            callScreen.classList.remove('active');

            // Reset all states
            isMicOn = true;
            isCameraOn = true;
            isScreenSharing = false;

            // Reset buttons
            micBtn.classList.remove('off');
            cameraBtn.classList.remove('off');
            screenBtn.classList.remove('active');

            // Reset icons
            micBtn.querySelector('.mic-icon').textContent = '🎤';
            cameraBtn.querySelector('.camera-icon').textContent = '📹';
            screenBtn.querySelector('.screen-icon').textContent = '🖥️';
        });
    }

    static chatBox() {
        return `
            <div class="chat-container">
                <div class="chat-header">
                    Doctor
                </div>
                <div class="chat-body">
                    <div class="chat-logs"></div>
                </div>
                <div class="chat-input-container">
                    <form class="chat-input-form">
                        <input type="text" class="chat-input" placeholder="Escriba un mensaje..."/>
                        <button type="submit" class="chat-submit"><span class="material-symbols-outlined"> send </span></button>
                    </form>
                </div>
            </div>
        `;
    }

    static initChat() {
        const chatLogs = document.querySelector('.chat-logs');
        const chatForm = document.querySelector('.chat-input-form');
        const chatInput = document.querySelector('.chat-input');
        let messageIndex = 2;

        function generateMessage(msg, type) {
            messageIndex++;
            const messageDiv = document.createElement('div');
            messageDiv.id = `cm-msg-${messageIndex}`;
            messageDiv.className = `chat-msg ${type}`;

            messageDiv.innerHTML = messageIndex % 2 === 0 ? `
                <span class="msg-avatar">
                    <img src="../img/doctor-profile.png" alt="User camera placeholder">
                </span>
                <div class="msg-text">
                    ${msg}
                </div>
            ` : `
                <span class="msg-avatar">
                    <img src="../img/default-user.png" alt="User camera placeholder">
                </span>
                <div class="msg-text">
                    ${msg}
                </div>
            `;

            chatLogs.appendChild(messageDiv);
            chatLogs.scrollTop = chatLogs.scrollHeight;
        }

        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const msg = chatInput.value.trim();

            if (msg === '') return;

            // Send user message
            generateMessage(msg, 'self');
            chatInput.value = '';

            // Simulate bot response after 1 second
            setTimeout(() => {
                generateMessage("Hola! Contame, que te anda pasando!", 'user');
            }, 1000);
        });
    }

    static init() {
        // Insert navbar
        const navbarPlaceholder = document.querySelector('#navbar-placeholder');
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = this.navbar();
        }

        // Insert footer
        const footerPlaceholder = document.querySelector('#footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = this.footer();
        }

        // Insert chat
        const chatPlaceholder = document.querySelector('#chat-placeholder');
        if (chatPlaceholder) {
            chatPlaceholder.innerHTML = this.chatBox();
            this.initChat(); // Initialize chat functionality after inserting HTML
        }

        // Insert video call
        const videoCallPlaceholder = document.querySelector('#videocall-placeholder');
        if (videoCallPlaceholder) {
            videoCallPlaceholder.innerHTML = this.videoCall();
            this.initVideoCall();
        }
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => Components.init());