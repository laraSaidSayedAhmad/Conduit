import {
  require_db
} from "/build/_shared/chunk-MPIXIEDY.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-E52R2TFC.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\home\$userId.tsx?browser
init_react();

// app/routes/home/$userId.tsx
init_react();
var import_db = __toModule(require_db());
function UserRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.user.userName, " "));
}
export {
  UserRoute as default
};
//# sourceMappingURL=/build/routes/home/$userId-5ZC7JD6W.js.map
