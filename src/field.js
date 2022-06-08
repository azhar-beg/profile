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

  fill(response) {
    if (this.#validator(response)) {
      this.#response = this.#parser(response);
    }
    throw new Error('invalid response');
  }

  getField() {
    return { name: this.#name, response: this.#response };
  }

  getPrompt() {
    return this.#prompt;
  }
}

module.exports = { Field };
