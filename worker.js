export const api = {
  icon: '🚀',
  name: 'dash.do',
  description: 'Dashboard Management API',
  url: 'https://dash.do/api',
  type: 'https://apis.do/saas',
  endpoints: {
    listCategories: 'https://dash.do/api',
    getCategory: 'https://dash.do/:type',
  },
  site: 'https://dash.do',
  login: 'https://dash.do/login',
  signup: 'https://dash.do/signup',
  subscribe: 'https://dash.do/subscribe',
  repo: 'https://github.com/drivly/dash.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://dash.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
