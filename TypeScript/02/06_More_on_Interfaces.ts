interface Takephoto {
  cameraMode: string;
  filter: string;
  burst: string;
}

interface Story {
    createStory(): number
}

class Instagram implements Takephoto {
  constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: string
    ) {}
}

class Youtube implements Takephoto, Story {
    createStory(): number {
        return 23;
    }
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string
    ) {}
}