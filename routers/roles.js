const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("cashier")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("admin")
 .extend("basic")
 .readAny("profile")
 
ac.grant("super-admin")
 .extend("basic")
 .extend("admin")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();