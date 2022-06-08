class Form {
  #fields;
  #currentIndex;
  #onComplete;
  constructor(onComplete, ...fields) {
    this.#fields = fields
    this.#currentIndex = 0;
    this.#onComplete = onComplete;
  }

  equals(anotherProfile) {
    return anotherProfile instanceof Form;
  }

  getPrompt() {
    return this.#fields[this.#currentIndex].getPrompt();
  }

  isFilled() {
    return this.#fields.every(field => field.isFilled());
  }

  fillField(response) {
    this.#fields[this.#currentIndex].fillField(response);
    this.#currentIndex++;
  }


  #getResponses() {
    const responses = {};
    return this.#fields.reduce((responses, field) =>
      ({ ...responses, ...field.getResponse() }), responses);
  }

  closeForm() {
    this.#onComplete(this.#getResponses())
  }
}

exports.Form = Form;
