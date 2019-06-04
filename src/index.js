import { updateUrl } from "./updateDom";

/**
 * the module has been copied in the msm-crypto.js file, but once installed
 * in your platform as a dependency, you should import it with
 * import { encrypt } from "msm-crypto";
 */
import { encrypt, decrypt } from "./msm-crypto";

function fromBase64toURL(base64) {
  return base64
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

const PUBLIC_KEY =
  "0X786kHj-ewx13C-JzNhWDizkJSCP8cdblU2894Nw7dICiEoHe-u_QJIJSmFFDxi0BQvAPgxLhMEnjnK_Qy8l_B2oBkNoUZuNu92jr28TVfmRUTw39N3mm06k_-lFQ7EgUgs2n-QfTJEUCjHXuGMBKcljG3Wln90d0UbrtWiRcnSOXm5CLJwNDntIqxGB4xhlagkkRqzwuZp5Sk31ohwIF_YlDJEGqJXhygu7ZhZSIwYZ6XiSmsM-gMsFjEhDWOQRc-kv54Z8CRnY3AIwa4-WjHzwDsw16QIxAPIhsblQgHcxLOtS73mfw6f6PT0MIvazfi11eDe_TerqM4NIRqGWQ";

const TARGET_URL = "https://www.meine-tui.com/registration/";

const now = new Date();

const data = {
  email: "fritz.tester@tui.de",
  bookingCode: "53154876",
  firstName: "Fritz",
  lastName: "Tester",
  gender: "m",
  departureDate: "2019-07-01",
  createTimestamp: now.toISOString() // "2019-06-04T11:46:07.008Z"
};

// encrypt() accepts a string as data input, so stringify objects
encrypt(PUBLIC_KEY, JSON.stringify(data))
  // encode base64
  .then(btoa)
  // alter encoding to base64url
  .then(fromBase64toURL)
  // here the encrypted string is appended to the url (with the parameter name)
  .then(qs => `${TARGET_URL}?data=${qs}`)
  // this just updates the url shown in the rendered html
  .then(updateUrl);
