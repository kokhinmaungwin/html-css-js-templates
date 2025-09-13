<script>
  /*<![CDATA[*/
  
  const viewSeting = {
      blogID: '0000000000000000000',
      databaseUrl: 'https://khinmaungwin-123-default-rtdb.firebaseio.com',
      abbreviation: true,
      lazyload: true
  }
  function loadJs(e, b, c, d) {
      let a = document.createElement("script");
      b && (a.id = b), a.async = c, a.defer = c, a.src = e, d && (a.onload = d), document.getElementsByTagName("head")[0].appendChild(a)
  }
  function abvr(a) {
      var b = Math.sign(Number(a));
      return 1e9 <= Math.abs(Number(a)) ? b * (Math.abs(Number(a)) / 1e9).toFixed(2) + "B" : 1e6 <= Math.abs(Number(a)) ? b * (Math.abs(Number(a)) / 1e6).toFixed(2) + "M" : 1e3 <= Math.abs(Number(a)) ? b * (Math.abs(Number(a)) / 1e3).toFixed(2) + "K" : Math.abs(Number(a))
  }
  function loadPostVw() {
      for (var c = document.querySelectorAll(".nld_view"), e = firebase.database(), a = 0; a < c.length; a++) {
          var d = c[a],
              b = d.getAttribute("data-id");
          (b = e.ref("BlogID_" + viewSeting.blogID + "/PostID_" + b)).once("value", function(a, b) {
              return function(c) {
                  0 < (c = c.exists() ? c.val() : 0) && (a.setAttribute("data-view", viewSeting.abbreviation ? abvr(c) : c), a.classList.remove("hidden")), "true" == a.getAttribute("data-add") && (a.setAttribute("data-add", !1), c = parseInt(c) + 1, b.set(c))
              }
          }(d, b))
      }
  }
  function postVw() {
      loadJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js", "fb-app", !0, () => {
          loadJs("https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js", "fb-db", !0, () => {
              var a = {};
              a.databaseURL = viewSeting.databaseUrl, firebase.initializeApp(a), loadPostVw()
          })
      })
  }
  if (!0 === viewSeting.lazyload) {
      var a = [],
          b = [];
      let c = () => {
          0 == a.length && null == localStorage.getItem("LZ_VIEW") && (localStorage.setItem("LZ_VIEW", 1), postVw())
      };
      window.addEventListener("scroll", a => {
          (0 != document.documentElement.scrollTop && 0 == b.length || 0 != document.body.scrollTop && 0 == b.length) && c()
      }, !0), document.getElementsByTagName("body")[0].addEventListener("click", a => {
          c()
      }), localStorage.getItem("LZ_VIEW") && postVw()
  } else postVw()
  /*]]>*/
</script>
