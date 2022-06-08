class Field {
  #name;
  #response;
  #validator;
  #parser;
  #prompt;
  constructor(name, prompt, validator, parser) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#parser = parser;
  }

  fillField(response) {
    if (!this.#validator(response)) {
      throw new Error('invalid response');
    }
    this.#response = this.#parser(response);
  }

  isFilled() {
    return this.#response !== undefined;
  }

  getField() {
    return { name: this.#name, response: this.#response };
  }

  getResponse() {
    const response = {};
    response[this.#name] = this.#response;
    return response;
  }

  getPrompt() {
    return this.#prompt;
  }
}

module.exports = { Field };
