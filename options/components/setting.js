function Setting({ setting, type, values, label, onChange, defaultValue }) {
  switch (type) {
    case "boolean":
      return React.createElement("div", {},
        React.createElement("label", {}, label),
        React.createElement("input", {
          type: "checkbox",
          defaultChecked: defaultValue,
          onChange,
        })
      );
    case "string":
      return React.createElement("div", {},
        label && React.createElement("label", {}, label),
        React.createElement("select", { onChange },
          values.map(v => React.createElement("option", {
            selected: v.label === defaultValue,
            value: v.label,
          }, v.label))
        )
      );
  }
}