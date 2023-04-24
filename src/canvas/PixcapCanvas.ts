import Konva from "konva"

class PixcapCanvas {
  stage: Konva.Stage;
  layer: Konva.Layer

  // eslint-disable-next-line
  constructor(container: any) {
    this.stage = new Konva.Stage({
      container,
      width: window.innerWidth,
      height: window.innerHeight
    })

    this.layer = new Konva.Layer({
      draggable: true
    })
  }

  render() {
    this.stage.add(this.layer)

    const group = new Konva.Group({
      draggable: true,
      name: "floating"
    })

    this.layer.add(group)

    const text = new Konva.Text({
      x: 50,
      y: 50,
      width: 300,
      text: "Hello Text",
      fill: "red",
    });

    group.add(text);
  }
}

export default PixcapCanvas