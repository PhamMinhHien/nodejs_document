const dns = require('dns');

/** lookup : Phân giải domain  */ 
// dns.lookup('cms.shoppingtv.vn', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });
// address: "93.184.216.34" family: IPv4


/* Cách dùng các methods trong class Resolver */
dns.resolve4('cms.shoppingtv.vn', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});