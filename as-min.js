const $confirm = (text, buttonColor) => { return new Promise((resolve) => { var as_background = document.createElement('div'); var as_box = document.createElement('div'); var as_contentWrapper = document.createElement('div'); var as_textnode = document.createElement('div'); var as_okButton = document.createElement('button'); var as_cancelButton = document.createElement('button'); var as_buttonSection = document.createElement('div'); as_okButton.innerText = 'Okay'; as_cancelButton.innerText = 'Cancel'; as_textnode.innerText = text; as_box.classList.add("as-box"); as_background.classList.add("as-background"); as_okButton.classList.add("as-okButton"); as_okButton.setAttribute("id","as-okButton"); as_cancelButton.classList.add("as-cancelButton"); as_textnode.classList.add("as-textnode"); as_buttonSection.classList.add("as-buttonSection"); as_contentWrapper.classList.add("as-contentWrapper"); as_box.style.backgroundColor = '#fff'; as_okButton.style.backgroundColor = buttonColor || '#5AB9EA'; as_okButton.style.color = '#fff'; as_textnode.style.color = '#666666'; as_box.appendChild(as_contentWrapper); as_contentWrapper.appendChild(as_textnode); as_contentWrapper.appendChild(as_buttonSection); as_buttonSection.appendChild(as_cancelButton); as_buttonSection.appendChild(as_okButton); as_background.appendChild(as_box); document.body.appendChild(as_background); var style = document.createElement('style'); style.setAttribute("type","text/css"); style.setAttribute("id","as_style_alertConfirm"); style.innerHTML = `.as-box{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; border: 0px solid; border-radius: 5px; padding: 20px; user-select: none; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; } .as-background{ position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.6); font-family: 'Heebo', sans-serif; z-index: 100000; } .as-textnode{ max-height: 500px; overflow-y: auto; font-size: 17px; word-wrap: break-word; line-height: 1.5; padding-right: 20px; } .as-textnode::-webkit-scrollbar{ width: 5px; } .as-textnode::-webkit-scrollbar-thumb{ background-color: #D5D8DC; border-radius: 10px; } .as-textnode{ scrollbar-color: #D5D8DC; scrollbar-width: thin; } .as-okButton{ border: 0px solid; border-radius: 3px; padding: 7px 9px; outline: none; font-size: 14px; cursor: pointer; } .as-cancelButton{ border: 0px solid; border-radius: 3px; padding: 7px 9px; outline: none; font-size: 14px; cursor: pointer; background-color: #fff; color: #666666; margin-right: 5px; } .as-buttonSection{ padding-top: 10px; display: flex; justify-content: flex-end; } @media only screen and (max-width: 576px) { .as-box { width: calc(100% - 30%); } .as-okButton{ cursor: default; } .as-cancelButton{ cursor: default; } } .as-box{animation:mymove 800ms;} @keyframes mymove{0% {opacity: 60%} .as-background{animation:fadein 800ms} @keyframes fadein{0% {opacity: 60%}`; document.head.appendChild(style); as_okButton.addEventListener('click', ()=>{ asOkay(); const back = true; if(back == true){ resolve(); }; }); as_cancelButton.addEventListener('click', ()=>{ asCancel(); }); function asOkay(){ let as_style_alertConfirm = document.getElementById("as_style_alertConfirm"); as_style_alertConfirm.remove(); as_background.remove(); }; function asCancel(){ let as_style_alertConfirm = document.getElementById("as_style_alertConfirm"); as_style_alertConfirm.remove(); as_background.remove(); }; }); }; function $toast(text, bgclr){ var as_toast = document.createElement('div'); as_toast.classList.add("as-toast"); as_toast.innerText = text; as_toast.style.backgroundColor = bgclr || '#2C3E50'; var style = document.createElement('style'); style.setAttribute("type","text/css"); style.setAttribute("id","as_style_toast"); style.innerHTML =` .as-toast{ max-width: 200px; text-align: center; padding: 10px; font-size: 16px; font-family: sans-serif; border-radius: 3px; position: fixed; bottom: -10%; left: 50%; color: #fff; transform: translateX(-50%); animation-name: fadeinout; animation-duration: 2500ms; word-wrap: break-word; line-height: 1.4; letter-spacing: .4px; user-select: none; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; } @keyframes fadeinout{ 10%{bottom: 15%; opacity: 100%} 20%{bottom: 15%; opacity: 100%} 40%{bottom: 15%; opacity: 100%} 60%{bottom: 15%; opacity: 100%} 80%{bottom: 15%; opacity: 100%} 100%{bottom: -10%; opacity: 100%} }`; setTimeout(function(){ as_toast.remove(); let as_style_toast = document.getElementById("as_style_toast"); as_style_toast.remove(); }, 2600); document.head.appendChild(style); document.body.appendChild(as_toast); }; function $alert(text, buttonColor){ var as_background = document.createElement('div'); var as_box = document.createElement('div'); var as_contentWrapper = document.createElement('div'); var as_textnode = document.createElement('div'); var as_button = document.createElement('button'); var as_buttonSection = document.createElement('div'); as_button.innerText = 'Okay'; as_textnode.innerText = text; as_box.classList.add("as-box"); as_background.classList.add("as-background"); as_button.classList.add("as-button"); as_textnode.classList.add("as-textnode"); as_buttonSection.classList.add("as-buttonSection"); as_contentWrapper.classList.add("as-contentWrapper"); as_box.style.backgroundColor = '#fff'; as_button.style.backgroundColor = buttonColor || '#5AB9EA'; as_button.style.color = '#fff'; as_textnode.style.color = '#666666'; as_box.appendChild(as_contentWrapper); as_contentWrapper.appendChild(as_textnode); as_contentWrapper.appendChild(as_buttonSection); as_buttonSection.appendChild(as_button); as_background.appendChild(as_box); document.body.appendChild(as_background); var style = document.createElement('style'); style.setAttribute("type","text/css"); style.setAttribute("id","as_style_basicAlert"); style.innerHTML = `.as-box{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; border: 0px solid; border-radius: 5px; padding: 20px; user-select: none; -ms-user-select: none; -moz-user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; } .as-background{ position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.6); font-family: 'Heebo', sans-serif; z-index: 100000; } .as-textnode{ max-height: 500px; overflow-y: auto; font-size: 17px; word-wrap: break-word; line-height: 1.5; padding-right: 20px; } .as-textnode::-webkit-scrollbar{ width: 5px; } .as-textnode::-webkit-scrollbar-thumb{ background-color: #D5D8DC; border-radius: 10px; } .as-textnode{ scrollbar-color: #D5D8DC; scrollbar-width: thin; } .as-button{ border: 0px solid; border-radius: 3px; padding: 7px 9px; outline: none; font-size: 14px; cursor: pointer; } .as-buttonSection{ padding-top: 10px; display: flex; justify-content: flex-end; } @media only screen and (max-width: 576px) { .as-box { width: calc(100% - 30%); } .as-button{ cursor: default; } } .as-box{animation:mymove 800ms;} @keyframes mymove{0% {opacity: 60%} .as-background{animation:fadein 800ms} @keyframes fadein{0% {opacity: 60%}`; document.head.appendChild(style); as_button.addEventListener('click', ()=>{ let as_style_basicAlert = document.getElementById("as_style_basicAlert"); as_style_basicAlert.remove(); as_background.remove(); }); }; function $loader_show(iColor){ var as_background = document.createElement('div'); as_background.classList.add("as-background"); as_background.setAttribute("id","as-background"); var as_loaderBox = document.createElement('div'); as_loaderBox.classList.add("loaderBox"); var as_iconDiv = document.createElement('div'); as_iconDiv.classList.add("iconDiv"); as_iconDiv.innerHTML = ` <svg fill="#B4B4B4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 28.551 28.551" style="enable-background:new 0 0 28.551 28.551;" xml:space="preserve">
    <g>
        <path d="M12.768,3.674v-2.17C12.768,0.676,13.443,0,14.273,0l0,0c0.83,0,1.505,0.676,1.505,1.504l0,0v2.17
            c0,0.83-0.675,1.508-1.505,1.508l0,0C13.443,5.182,12.768,4.504,12.768,3.674L12.768,3.674z"/>
        <path d="M12.768,27.041v-2.168c0-0.828,0.675-1.506,1.505-1.506l0,0c0.83,0,1.505,0.678,1.505,1.506l0,0v2.168
            c0,0.832-0.675,1.51-1.505,1.51l0,0C13.443,28.551,12.768,27.873,12.768,27.041L12.768,27.041z"/>
        <path d="M20.704,7.844c-0.585-0.588-0.585-1.545,0-2.129l0,0l1.534-1.533c0.589-0.59,1.542-0.59,2.13,0l0,0
            c0.59,0.59,0.59,1.539,0,2.125l0,0l-1.534,1.537c-0.294,0.291-0.68,0.439-1.064,0.439l0,0C21.384,8.283,21,8.135,20.704,7.844
            L20.704,7.844z"/>
        <path d="M4.179,24.367c-0.585-0.586-0.585-1.541,0-2.131l0,0l1.535-1.533c0.592-0.586,1.541-0.586,2.131,0l0,0
            c0.586,0.592,0.586,1.541,0,2.131l0,0l-1.536,1.533c-0.292,0.293-0.68,0.439-1.065,0.439l0,0
            C4.859,24.807,4.472,24.66,4.179,24.367L4.179,24.367z"/>
        <path d="M24.875,15.777c-0.832,0-1.506-0.674-1.506-1.504l0,0c0-0.832,0.674-1.506,1.506-1.506l0,0h2.169
            c0.83,0,1.507,0.678,1.507,1.506l0,0c0,0.83-0.677,1.504-1.507,1.504l0,0H24.875L24.875,15.777z"/>
        <path d="M1.505,15.777C0.674,15.777,0,15.104,0,14.273l0,0c0-0.832,0.674-1.506,1.505-1.506l0,0h2.169
            c0.83,0,1.505,0.678,1.505,1.506l0,0c0,0.83-0.675,1.504-1.505,1.504l0,0H1.505L1.505,15.777z"/>
        <path d="M22.238,24.367l-1.534-1.537c-0.585-0.586-0.585-1.535,0.003-2.127l0,0c0.587-0.586,1.539-0.586,2.127,0l0,0l1.534,1.533
            c0.586,0.59,0.586,1.545,0,2.131l0,0c-0.296,0.293-0.681,0.439-1.065,0.439l0,0C22.919,24.807,22.533,24.66,22.238,24.367
            L22.238,24.367z"/>
        <path d="M5.714,7.844L4.179,6.307c-0.585-0.586-0.585-1.539,0-2.125l0,0c0.589-0.59,1.542-0.59,2.13,0l0,0l1.536,1.533
            c0.586,0.584,0.586,1.541,0,2.129l0,0C7.549,8.135,7.165,8.283,6.78,8.283l0,0C6.394,8.283,6.009,8.135,5.714,7.844L5.714,7.844z"
            />
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
 `; as_iconDiv.style.overflow = "hidden"; as_loaderBox.appendChild(as_iconDiv); as_background.appendChild(as_loaderBox); document.body.appendChild(as_background); var style = document.createElement('style'); style.setAttribute("type","text/css"); style.setAttribute("id","as-style-loader"); style.innerHTML = ` .as-background{ position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.6); font-family: 'Heebo', sans-serif; z-index: 100000; } .loaderBox{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100px; height: 100px; background-color: #ffffff; border-radius: 5px; display: flex; align-items: center; justify-content: center; } .loaderBox .iconDiv{ position: relative; width: 49px; height: 49px; animation: rotate 2s linear infinite; } @keyframes rotate{ 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .loaderBox .iconDiv svg{ fill: ${iColor}; } `; document.head.appendChild(style); } function $loader_hide(){ var as_style_loader = document.getElementById("as-style-loader"); var as_background = document.getElementById("as-background"); as_style_loader.remove(); as_background.remove(); } 