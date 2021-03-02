export const basics = {
  on_login,
  setUI,
  unsetUI,
  getUI,
  joinNode,
  generate_relationship_json
};

async function on_login() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/login`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function setUI(listOfCust) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id_list": listOfCust
  }),
  };

  const response = await fetch(
    `http://localhost:11000/set_ui_visibility_for_multiple_customers`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function unsetUI(listOfCust) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id_list": listOfCust
  }),
  };

  const response = await fetch(
    `http://localhost:11000/unset_ui_visibility_for_multiple_customers`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function joinNode(relation) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "cust_id": relation.source,
      "update_type": "add",
      "relationship_type": relation.relationship,
      "related_cust_id": relation.target
  }),
  };

  const response = await fetch(
    `http://localhost:11000/update_relationship`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function getUI() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/display_ui_visible_nodes`,
    requestOptions
  );
  const json = await response.json();
  return json;
}

async function generate_relationship_json() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  const response = await fetch(
    `http://localhost:11000/generate_relationship_json`,
    requestOptions
  );
  const json = await response.json();
  return json;
}


