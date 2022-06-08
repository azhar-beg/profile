class Field {
  #name;
  #response;
  #validator;
  #parser;
  #prompt;
  constructor(name, prompt, validator = _ => true, parser = x => x) {
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

  getPrompt() {
    return this.#prompt;
  }
}

module.exports = { Field };
