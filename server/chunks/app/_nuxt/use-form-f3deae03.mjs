import { computed, h } from 'vue';

function getMatch(userAgent, platformMatch) {
  const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent) || /(opr)[\/]([\w.]+)/.exec(userAgent) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+)/.exec(userAgent) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) || [];
  return {
    browser: match[5] || match[3] || match[1] || "",
    version: match[2] || match[4] || "0",
    versionNumber: match[4] || match[2] || "0",
    platform: platformMatch[0] || ""
  };
}
function getPlatformMatch(userAgent) {
  return /(ipad)/.exec(userAgent) || /(ipod)/.exec(userAgent) || /(windows phone)/.exec(userAgent) || /(iphone)/.exec(userAgent) || /(kindle)/.exec(userAgent) || /(silk)/.exec(userAgent) || /(android)/.exec(userAgent) || /(win)/.exec(userAgent) || /(mac)/.exec(userAgent) || /(linux)/.exec(userAgent) || /(cros)/.exec(userAgent) || /(playbook)/.exec(userAgent) || /(bb)/.exec(userAgent) || /(blackberry)/.exec(userAgent) || [];
}
function getPlatform(UA) {
  const userAgent = UA.toLowerCase(), platformMatch = getPlatformMatch(userAgent), matched = getMatch(userAgent, platformMatch), browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }
  if (matched.platform) {
    browser[matched.platform] = true;
  }
  const knownMobiles = browser.android || browser.ios || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"];
  if (knownMobiles === true || userAgent.indexOf("mobile") > -1) {
    browser.mobile = true;
    if (browser.edga || browser.edgios) {
      browser.edge = true;
      matched.browser = "edge";
    } else if (browser.crios) {
      browser.chrome = true;
      matched.browser = "chrome";
    } else if (browser.fxios) {
      browser.firefox = true;
      matched.browser = "firefox";
    }
  } else {
    browser.desktop = true;
  }
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }
  if (browser["windows phone"]) {
    browser.winphone = true;
    delete browser["windows phone"];
  }
  if (browser.chrome || browser.opr || browser.safari || browser.vivaldi || browser.mobile === true && browser.ios !== true && knownMobiles !== true) {
    browser.webkit = true;
  }
  if (browser.edg) {
    matched.browser = "edgechromium";
    browser.edgeChromium = true;
  }
  if (browser.safari && browser.blackberry || browser.bb) {
    matched.browser = "blackberry";
    browser.blackberry = true;
  }
  if (browser.safari && browser.playbook) {
    matched.browser = "playbook";
    browser.playbook = true;
  }
  if (browser.opr) {
    matched.browser = "opera";
    browser.opera = true;
  }
  if (browser.safari && browser.android) {
    matched.browser = "android";
    browser.android = true;
  }
  if (browser.safari && browser.kindle) {
    matched.browser = "kindle";
    browser.kindle = true;
  }
  if (browser.safari && browser.silk) {
    matched.browser = "silk";
    browser.silk = true;
  }
  if (browser.vivaldi) {
    matched.browser = "vivaldi";
    browser.vivaldi = true;
  }
  browser.name = matched.browser;
  browser.platform = matched.platform;
  return browser;
}
const ssrClient = {
  has: {
    touch: false,
    webStorage: false
  },
  within: { iframe: false }
};
const client = ssrClient;
const Platform = {
  install(opts) {
    const { $q } = opts;
    {
      $q.platform = this.parseSSR(opts.ssrContext);
    }
  }
};
{
  Platform.parseSSR = (ssrContext) => {
    const userAgent = ssrContext.req.headers["user-agent"] || ssrContext.req.headers["User-Agent"] || "";
    return {
      ...client,
      userAgent,
      is: getPlatform(userAgent)
    };
  };
}
let queue = [];
let waitFlags = [];
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
const useFormProps = {
  name: String
};
function useFormAttrs(props) {
  return computed(() => ({
    type: "hidden",
    name: props.name,
    value: props.modelValue
  }));
}
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](
      h("input", {
        class: "hidden" + (className || ""),
        ...formAttrs.value
      })
    );
  };
}
function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for);
}

export { Platform as P, useFormInputNameAttr as a, addFocusFn as b, client as c, useFormInject as d, useFormAttrs as e, removeFocusFn as r, useFormProps as u };
//# sourceMappingURL=use-form-f3deae03.mjs.map
