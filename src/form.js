class Form {
  #fields;
  #currentIndex;
  constructor(...fields) {
    this.#fields = fields
    this.#currentIndex = 0;
  }

  equals(anotherProfile) {
    return anotherProfile instanceof Form;
  }

  getPrompt() {
    return this.#fields[this.#currentIndex].getPrompt();
  }

  fillField(response) {
    this.#fields[this.#currentIndex].fillField(response);
    this.#currentIndex++;
  }

  isFilled() {
    return this.#fields.every(field => field.isFilled());
  }

  getResponses() {
    const responses = {};
    return this.#fields.reduce((responses, field) =>
      ({ ...responses, ...field.getResponse() }), responses);
  }
}

exports.Form = Form;
