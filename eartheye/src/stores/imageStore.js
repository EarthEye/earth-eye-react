import { decorate, observable } from "mobx";

class ImageStore {
  constructor() {
    this.list = [];
    this.image1 = [];
    this.image2 = [];
    this.width = null;
    this.height = null;
    this.state = { x: 0, y: 0, gsd: 0, img_w: 0, img_h: 0 };
    this.points = [];
    this.distance = [];
  }

  addPhotoToList(file) {
    if (this.list.length === 0) {
      this.image1.push(file);
    } else if (this.list.length === 1) {
      this.image2.push(file);
    }
    this.list.push(file);
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
  image2: observable,
  width: observable,
  height: observable,
  state: observable,
  points: observable,
  distance: observable
});

export default new ImageStore();
