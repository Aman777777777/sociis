(() => {
  'use strict';
  const links = {"1":"https://book.stripe.com/4gMbJ186r1gIbEI9vvaEE0j","2":"https://book.stripe.com/14A5kDdqL8Ja104233aEE0k","3":"https://book.stripe.com/eVq3cv2M70cEdMQ233aEE0l","4":"https://book.stripe.com/5kQ9ATfyT4sUdMQ9vvaEE0m","5":"https://book.stripe.com/aFaaEX3Qb2kM7os5ffaEE0n","6":"https://book.stripe.com/8x27sL1I33oQeQU233aEE0o","7":"https://book.stripe.com/6oUcN59av6B2gZ2dLLaEE0p","8":"https://book.stripe.com/5kQcN5biDaRifUYdLLaEE0q","9":"https://book.stripe.com/14A8wPbiD7F66ko7nnaEE0r","10":"https://book.stripe.com/00w14nbiD7F6aAEgXXaEE0s"};
  const selectors = [...document.querySelectorAll('[data-vip-selector]')];
  const totals = [...document.querySelectorAll('[data-vip-total]')];
  const buttons = [...document.querySelectorAll('[data-vip-checkout]')];
  const money = new Intl.NumberFormat('en-IE', {style:'currency', currency:'EUR', maximumFractionDigits:0});
  function update(value) {
    const guests = Number(value);
    if (!Number.isInteger(guests) || !links[guests]) return;
    selectors.forEach(select => { select.value = String(guests); });
    totals.forEach(total => { total.textContent = `Total ${money.format(guests * 1000)} including Belgian VAT`; });
    buttons.forEach(button => {
      button.href = links[guests];
      button.querySelector('[data-vip-label]').textContent = `Book ${guests} VIP ${guests === 1 ? 'place' : 'places'}`;
    });
  }
  selectors.forEach(select => select.addEventListener('change', () => update(select.value)));
  window.addEventListener('pageshow', () => update(selectors[0]?.value || '1'));
  update(selectors[0]?.value || '1');
})();
