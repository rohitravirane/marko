var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = require("./component"),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rw,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/component-include-attr/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/components/taglib/include-tag")),
    marko_attr = marko_helpers.a;

function render(input, out, component, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", component.id) +
    "><h1>Header</h1>");

  var __componentId1 = component.elId("0[]");

  out.w("<div" +
    marko_attr("id", __componentId1) +
    ">");

  include_tag({
      _target: data.renderBody,
      _elId: __componentId1
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.w(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ],
    tags: [
      "marko/components/taglib/include-tag"
    ]
  };
