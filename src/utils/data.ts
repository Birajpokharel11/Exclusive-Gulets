export function getTenantDomain(host) {
  let isDev = host.includes('localhost');
  let splitHost = host.split('.');

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === 'www' || page === 'exclusivegulets') {
      return null;
    }

    return page;
  }

  return null;
}
