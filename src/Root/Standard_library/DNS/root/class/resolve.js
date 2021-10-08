const { Resolver } = require('dns')
const resolver = new Resolver({timeout: 4000})


/*
	dns.getServers()
	dns.lookup(hostname[, options], callback)
	dns.lookupService(address, port, callback)
	dns.resolve(hostname[, rrtype], callback)
	dns.resolve4(hostname[, options], callback)
	dns.resolve6(hostname[, options], callback)
	dns.resolveAny(hostname, callback)
	dns.resolveCname(hostname, callback)
	dns.resolveMx(hostname, callback)
	dns.resolveNaptr(hostname, callback)
	dns.resolveNs(hostname, callback)
	dns.resolvePtr(hostname, callback)
	dns.resolveSoa(hostname, callback)
	dns.resolveSrv(hostname, callback)
	dns.resolveTxt(hostname, callback)
	dns.reverse(ip, callback)
	dns.setServers(servers)


*/

resolver.setServers([
	'4.4.4.4',
	'[2001:4860:4860::8888]',
	'4.4.4.4:1053',
	'[2001:4860:4860::8888]:1053'
]);

console.log(resolver.getServers())