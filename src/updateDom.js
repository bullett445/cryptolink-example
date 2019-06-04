document.getElementById("app").innerHTML = `
<h1>Crypto link example</h1>
<div>here the computed URL:<b><pre id="url"></pre></b></div>
`;

const result = document.getElementById("url");

export const updateUrl = url => (result.innerHTML = url);
