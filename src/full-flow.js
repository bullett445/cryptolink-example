/**
 * just import this file in index.js to test the whole flow
 * import './full-flow'
 */

import { encrypt, decrypt } from "./msm-crypto";

const PUBLIC_KEY =
  "oh-3mlrQQ_-a-Zl1fCS9Goo9kUZyjvm2YVllI1X8GxQheZETWbeROeFvi26_Y5euqTWq6f21Xt7rKn2hgXuAWS_ZXNxMF155uZ0___yW31oL0fZTIO-DwY-MbJk9S9WJP7kT31AHYSYynwfpKHCCcTKsw1pybAQK_RY1Uml5ggdrsC-SiWOfbVW7dSBAb0wJ1hE_NdCT8QhqIhFvvKWXccFXwGM8bnIWdrON2_r9a6uUNVh7nxc-PlGXQlK8y41KWiIJax530IDQfbxak_ag8rlI3-eR9lPlfxndVc6aPiM-yRUfjm_AWHHV1x9MBcsGIqg7WQ8Q0EWRLaHXIVaH2w";

const PRIVATE_KEY = {
  alg: "RSA-OAEP-256",
  d:
    "DGu7qFK-1AbYO7k7HAjAiDEBKIkqK7QL-gdcTUnAJ97x9ZtczSnYMYQJBLi2Zw3u7r3S21x5scwIXlgDsKTin3KgB5JFLiEp2EOo7JbQhEokz7A8jDBter3ht0xCOvYgLsaiNCCwgAvqIu77OQLtq3iDbfAXBhmFMgCqkybLjV-e8USYZf7A9-4NCMIL_fyUdUCbE76oRyclsZGz1yq2dAVO0DQw8bdx5PndDTYMa-ke94ws9k6vMqxm4R7kwgQNPx3ZpnfXvd4b3ILG_aXOkCqWCDG4pZQXoPSBASQ-hy3Ad_hdY8jKhXdNiFVK3PZTZ07MjGuaUUuWV0djbQg5YQ",
  dp:
    "TcOM7XZ57Uz-ZqwJZdQg1TrMi0NXpRBm0KPFqhXjFR09XifJhZ-k_Qi43Y3vnzhZtb6e7guDYnL6Bd7Wl0dby9IcbplC7Rn_7eGWW5n8t4-lL77TXsNWBLX95AHW3JBkd1nzx2mTt6f1X2MpNq3zoMjLy0nBlYTDzEavMpeedNs",
  dq:
    "r25o8mGzamlIRcmoQBpJcLfvLwpPivil9pzAKaDkS8XlUJQ6sXD3RbWov9V3dr0uHjIBDqg32bhGXtMu_yEADwzbiJNvFqbBlD76sx5coF3uMDicPXWsD3Nmn7QOciaT9mEtZ_jM-AhVsWZB6Yb4MYbSenupnKms2Tfq9H1ePbE",
  e: "AQAB",
  ext: true,
  key_ops: ["decrypt"],
  kty: "RSA",
  n:
    "oh-3mlrQQ_-a-Zl1fCS9Goo9kUZyjvm2YVllI1X8GxQheZETWbeROeFvi26_Y5euqTWq6f21Xt7rKn2hgXuAWS_ZXNxMF155uZ0___yW31oL0fZTIO-DwY-MbJk9S9WJP7kT31AHYSYynwfpKHCCcTKsw1pybAQK_RY1Uml5ggdrsC-SiWOfbVW7dSBAb0wJ1hE_NdCT8QhqIhFvvKWXccFXwGM8bnIWdrON2_r9a6uUNVh7nxc-PlGXQlK8y41KWiIJax530IDQfbxak_ag8rlI3-eR9lPlfxndVc6aPiM-yRUfjm_AWHHV1x9MBcsGIqg7WQ8Q0EWRLaHXIVaH2w",
  p:
    "0TQj8zccdyf7aixIsnO6R3nCwawb34IFidj0B3o3fvUxFE3i5-_i4JY1eH1RIMaqEnpDnoxDRpGs2AYZjuKI4FuNt0b7CILdKalZPbMZ9kXZFzwRgMTwerLSFoGvbJ6bSxv_DCw2BvQKoLlgxaMQr1R2tL5BwVSTl_2uvWpju0s",
  q:
    "xmOYg2brYnY_S_3jf4BBo0SLP6yX_6W_lSWbx8M-PULPCRfmMTeEKpZsIpJBkEUS5jCYvO2GPUB40eugVHXMhSlM89oh_xkhpsxMgCBMd8rzJolI_1UkioI9_Uywz4hehLGu9sXkxCMZZzPumDe8t35JzWmx5LlXiwOA9UoPe7E",
  qi:
    "bWAhmjLZ1GrB_DD_buItZf7EKiJxSm5IE0RKgXMXSZscJzHqshTtIEyLzWzVXoKaLecBilnXQ17RIKiRDsGQk0Mm9dqR9K-CUQ9Zobnv05SWjrdH6upvr2DNdvz2fToMzOmCHs82XTpPzhD46x5ToS8zXS3tMuSo-WLLw0YAg1o"
};

const data = { username: "FRTEST", password: "WELCOME1" };

const log = name => v => {
  console.log(`${name}:"${v}"`);
  return v;
};

encrypt(PUBLIC_KEY, JSON.stringify(data))
  // encoding is needed to use the encrypted string in the URL
  .then(encodeURIComponent)
  .then(log("1"))
  .then(decodeURIComponent)
  .then(log("2"))
  .then(enc => decrypt(PRIVATE_KEY, enc))
  .then(log("3"))
  .then(JSON.parse)
  .then(log("4"));