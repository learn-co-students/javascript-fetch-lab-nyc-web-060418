const token = 'c5b49169cfe47318a2639e65db9e2fb5110ffe58'

function getIssues() {
}

function showIssues(json) {
  let issues = document.getElementById('issues')
  results.innerHTML += `<li> ${json} </li>`
}

function createIssue() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const title = document.getElementById('title');
  const body = document.getElementById('body')
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    "title": `${title.innerText}`,
    "body": `${body.innerText}`,
    }
  }).then(res=> res.json()).then(json => showIssues(json));

}

function showForkedRepo(res) {
  let a = document.createElement('a');
  let linkText = document.createTextNode('link to fork')
  a.appendChild(linkText);
  a.title = "link to fork";
  a.href = "https://github.com/" + res["owner"]["login"] + "/" + res["name"];
  results.appendChild(a);
}

function showResults(res) {
  let results = document.getElementById('results')
  showForkedRepo(res)
  results.innerHTML += `<li> ${res} </li>`

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res=> res.json()).then(json => showResults(json));
}

function getToken() {

  return ''
}
