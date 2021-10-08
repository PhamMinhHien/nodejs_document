/* Cung cấp các methods chạy bên ngoài async => mà return Promises cho Object hơn là dùng callback .
	Truy cập bằng cách : require('dns').promises

*/

const { Resolver } = require('dns').promises
const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

// This request will use the server at 4.4.4.4, independent of global settings.
resolver.resolve4('example.org').then((addresses) => {
  console.log(addresses);
});

// Alternatively, the same code can be written using async-await style.
(async function() {
  const addresses = await resolver.resolve4('example.org');
})();