'use strict';
(() => {
  const api=window.eaglePlayground;
  if(!api)return;
  function meetMarios(){
    api.showDialog(`<div class="dialog-content"><p class="eyebrow">MARIOS WEB DESIGN INTERNATIONAL</p><h2 id="dialog-title">YES UNCLE.<br>IT’S ONLINE.</h2><div class="marios-message"><p>I have made all the changes you sent me in eleven separate voice messages.</p><p>The eagle is bigger. The buttons are shiny. There are eighteen flats now. Please stop asking me to make it more on the internet. This is the amount of internet it goes on.</p><p>I am 16 and I do have things after school.</p></div><ul class="marios-specs"><li><b>£0</b>Family invoice</li><li><b>18</b>Flats uploaded, all of them</li><li><b>7</b>Final versions of the advert</li><li><b>Dad</b>Quality assurance</li></ul><button class="button blue" id="marios-thanks">Tell the cousin it’s very computer</button><p class="dialog-fine">Replies may take longer during maths.</p></div>`,'marios');
    document.querySelector('#marios-thanks').addEventListener('click',()=>{
      api.closeDialog();
      window.eagleAgency?.award('cousin','For putting the whole company on the internet without receiving any money.','Marios','Services to Family Computing');
      api.toast('Stath: “Howley Parker. He’s made it do all the internet. Respect absolutely coming off that boy.”');
      api.rain('★',15);
    });
  }
  document.querySelector('#cousin-badge').addEventListener('click',meetMarios);
  document.querySelector('#marios-credit').addEventListener('click',meetMarios);
})();
