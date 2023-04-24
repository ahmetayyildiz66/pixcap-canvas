import Konva from "konva"

class PixcapCanvas {
  stage: Konva.Stage;

  // eslint-disable-next-line
  constructor(container: any) {
    this.stage = new Konva.Stage({
      container,
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  render() {
    console.log("hey automation canvas render: ", this.stage)
  }
}

export default PixcapCanvas