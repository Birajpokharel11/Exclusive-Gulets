export async function getTenantDomain(host, request = false) {
  let isDev = host.includes('localhost');
  let splitHost = host.split('.');

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === 'www' || page === 'exclusivegulets') {
      return null;
    }

    if (request) {
      let res = await fetch(
        'http://3.109.159.153:8080/public/validateUserEmailAndBrokerSite',
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            site: page
          })
        }
      );

      if (res.status === 200) {
        const result: any = await res.json();
        const data = result?.detail?.data;
        if (data.isValidSite) {
          return null;
        }
        return page;

        // return { html, allowEdit, editLink: `${href}?edit=${token}` };
      }

      // if (res.status === 404) {
      //   let { html, token } = await res.json();
      //   return { html, editLink: `${href}?edit=${token}` };
      // }

      // if (!res.ok && res.status !== 404) {
      //   let { stack, message } = await res.json();
      //   return { errorCode: res.status, stack, message };
      // }
    }

    return page;
  }

  return null;
}
