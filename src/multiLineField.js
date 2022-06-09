class MultiLineField {
  #name;
  #responses;
  #validator;
  #parser;
  #prompts;
  constructor(name, prompts, validator = _ => true, parser = x => x) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#parser = parser;
    this.#responses = [];
  }

  fill(response) {
    if (!this.#validator(response)) {
      throw new Error('invalid responses');
    }
    this.#responses.push(this.#parser(response));
  }

  isFilled() {
    return this.#prompts.length === this.#responses.length;
  }

  getField() {
    return { name: this.#name, response: this.#responses.join('\n') };
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }
}

module.exports = { MultiLineField };


