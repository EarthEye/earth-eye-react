import { decorate, observable } from "mobx";

class ImageStore {
  constructor() {
    this.list = [];
    this.image1 = [];
    this.image2 = [];
  }

  addPhotoToList(file) {
    if (this.list.length === 0) {
      this.image1.push(file);
    } else if (this.list.length === 1) {
      this.image2.push(file);
    }
    this.list.push(file);
  }

  removePhotoFromList(photouri) {
    this.list = this.list.filter(listPhoto => listPhoto !== photouri);
  }

  clearList() {
    this.list = [];
    this.image1 = [];
    this.image2 = [];
  }
}

decorate(ImageStore, {
  list: observable,
  image1: observable,
  image2: observable
});

export default new ImageStore();
