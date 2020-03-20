/**
 * Tìm địa chỉ IP - và đảo ngược phân giải 
 */


const dns = require('dns');
/**
 * Tại sao addresses là [] => " 1 domain nhiều IP " <=> "hoặc do IP bị thay đổi "
 */
dns.resolve4('archive.org', (err, addresses) => {
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