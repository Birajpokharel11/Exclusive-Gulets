export async function getTenantDomain(host) {
  let isDev = host.includes('localhost');
  let splitHost = host.split('.');

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === 'www') {
      return null;
    }

    return page;
  }

  return null;
}

export const createDomain = (domainName) => {
  const { host } = window.location;
  const { protocol } = window.location;
  const parts = host.split('.');
  // let subdomain = '';
  // let appendedUrl;
  // If we get more than 3 parts, then we have a subdomain
  // INFO: This could be 4, if you have a co.uk TLD or something like that.
  if (parts.length >= 4) {
    // subdomain = parts[0];
    // Remove the subdomain from the parts list
    parts.splice(0, 1);
    // Set the location to the new url
    // window.location = protocol + '//' + parts.join('.') + '/' + subdomain;
  }
  const appendedUrl = `${protocol}//${domainName}.${parts.join('.')}`;
  return appendedUrl;
};
