class DrawImg {
    constructor(sprite, ctx, frameWidth, frameHeight, frameSpeed, startFrame, endFrame, sizeX/* , sizeY */) {
        this.sprite = sprite;
        this.frameWidth = frameWidth; 
        this.frameHeight = frameHeight;
        this.frameSpeed = frameSpeed;
        this.starrtFrame = startFrame;
        this.endFrame = endFrame;
        this.sizeX = sizeX;
        this.sizeY = this.sizeX;
        this.framesСharacter;
        this.currentFrame = 0;
        this.count = 0;
        this.ctx = ctx;
        this.animSequence = [];

        for (let frameNum = startFrame; frameNum <= endFrame; frameNum++) {
            this.animSequence.push(frameNum);
        }
    }

    createImg() {
        let image = new Image();
        image.addEventListener('load', () => {
            this.framesСharacter = Math.floor(image.width / this.frameWidth);
        });
        image.src = this.sprite;
        return image;
    }

    update() {
        if (this.count === (this.frameSpeed - 1)) {
            this.currentFrame = (this.currentFrame + 1) % this.animSequence.length;
        }
        this.count = (this.count + 1) % this.frameSpeed;
    }

    draw(x, y) {
        let row = Math.floor(this.animSequence[this.currentFrame] / this.framesСharacter);
        let col = Math.floor(this.animSequence[this.currentFrame] % this.framesСharacter);
        this.ctx.drawImage(this.createImg(), col * this.frameWidth, row * this.frameHeight, this.frameWidth, this.frameHeight, x, y, this.sizeX, this.sizeY);
    };
}

export default DrawImg;

