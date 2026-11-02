/* Shared send function for the contact form (window.skSend).
   Messages go to the Google Apps Script web app; if none is set, they go through FormSubmit. */
(function () {
  var MAIL = "sandeepkumark1028@gmail.com";
  // Google Apps Script web app that sends contact messages. Leave empty to use FormSubmit.
  var API = "https://script.google.com/macros/s/AKfycbyEWkm6U6Hf1Af7KhGrAMLqSjgtKVpLte-6w2pB7E3Tm3v4b0F4hsVQ2sSmpBoZ10EmVA/exec";

  // fetch that gives up after a while instead of hanging forever
  function tfetch(url, opts, ms) {
    var c = window.AbortController ? new AbortController() : null, t = setTimeout(function () { if (c) c.abort(); }, ms || 12000);
    opts = opts || {}; if (c) opts.signal = c.signal;
    var race = new Promise(function (_, rej) { setTimeout(function () { rej(new Error("timeout")); }, (ms || 12000) + 500); });
    return Promise.race([fetch(url, opts), race]).then(function (r) { clearTimeout(t); return r; }, function (e) { clearTimeout(t); throw e; });
  }
  window.skSend = function (p) {
    if (API) {
      return tfetch(API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "message", name: p.name, email: p.email, subject: p.subject, message: p.message, website: "" }) }, 20000)
        .then(function (r) { return r.json(); })
        .then(function (j) {
          if (j && j.ok) return true;
          var er = new Error((j && j.error) || "rejected");
          if (j && j.error && j.error !== "Unknown action.") er.userMessage = j.error;   // an old script does not know "message" yet
          throw er;
        })
        .catch(function (err) { try { console.warn("[contact form] could not send:", err && err.message); } catch (x) {} throw err; });
    }
    return tfetch("https://formsubmit.co/ajax/" + MAIL, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: p.name, email: p.email, _subject: p.subject, message: p.message, _template: "table", _captcha: "false", _honey: "" }) })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (j) { if (j && (j.success === true || j.success === "true")) return true; throw new Error((j && j.message) || "send failed"); })
      .catch(function (err) { try { console.warn("[contact form] could not send:", err && err.message); } catch (x) {} throw err; });
  };
})();
