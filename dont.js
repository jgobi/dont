const s = document.createElement('script');
s.textContent = `
  (function() {
    const disabledEvents = ['visibilitychange', 'webkitvisibilitychange'];
    Object.defineProperty(document, 'hidden', { value: false, writable: false, });
    const a = Node.prototype.addEventListener;
    Node.prototype.addEventListener = function(e) {
      if (!disabledEvents.includes(e)) {
        a.apply(this, arguments)
      }
    }
  })();
`;
(document.head || document.documentElement).appendChild(s);
s.remove();
