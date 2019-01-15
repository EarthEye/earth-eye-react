import { decorate, observable } from "mobx";

class ImageStore {
  constructor() {
    this.list = [];
  }

  addPhotoToList(file, index) {
    this.list.push(file);
  }

  removePhotoFromList(photouri) {
    this.list = this.list.filter(listPhoto => listPhoto !== photouri);
  }

  clearList() {
    this.list = [];
    console.log(this.list);
  }
}

decorate(ImageStore, {
  list: observable
});

export default new ImageStore();
